import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseurlPlayer } from '../../api/Api'
import './PlayerDetails.css'

const PlayerDetails = () => {
  const [playerData, setPlayerData] = useState([])

  const APIKEY = process.env.REACT_APP_API_KEY

  const params = useParams()
  const obj = new URLSearchParams(params);
  const term = obj.get('player_id')
  let results = `${baseurlPlayer}/Player/${term}?key=${APIKEY}`

  const today = new Date();
  const year = today.getFullYear();

  useEffect(() => {
    const playerData = async () => {
      try {
        const response = await fetch(results)
        const playerInfo = await response.json()
        setPlayerData(playerInfo)
      } catch (error) {
        console.log(error)
      }
    }
    playerData()
  }, [results])

  console.log(playerData)

  const { Height, Weight, PhotoUrl, FirstName, LastName, Jersey, Position, BirthDate, ProDebut, BatHand, ThrowHand, College, BirthCity, BirthState, BirthCountry } = playerData

  let proDebutTime = ProDebut
  proDebutTime = new Date(proDebutTime).toLocaleDateString().split("/")
  let proDebutMonth = proDebutTime[0] < 10 ? `0${proDebutTime[0]}` : `${proDebutTime[0]}`
  let proDebutDay = proDebutTime[1] < 10 ? `0${proDebutTime[1]}` : `${proDebutTime[1]}`
  let proDebutYear = proDebutTime[2]

  let date = BirthDate

  date = new Date(date).toLocaleDateString().split("/")

  let birthMonth = date[0] < 10 ? `0${date[0]}` : `${date[0]}`
  let birthDay = date[1] < 10 ? `0${date[1]}` : `${date[1]}`
  let birthYear = date[2]

  let result = Number(Height / 12).toFixed(1)
  let feet = Number(result.toString().split(".")[0])
  let inches = Number(result.toString().split(".")[1])

  return (
    <>
      <div className='player-header'>
        <img className='player-photo' src={PhotoUrl} alt='Bio Card' />
        <div className='player-vitals'>
          <h1>
            <span className='player-header-name'>{FirstName} {LastName}</span>
            <span className='player-header-number'>#{Jersey}</span>
          </h1>
          <ul>
            <li>{Position}</li>
            <li>B/T: {BatHand}/{ThrowHand}</li>
            <li className='player-header-height'>{feet}'{inches}"/{Weight}</li>
            <li className='player-header-age'>Age: {year - BirthDate?.split("-")[0]}</li>
          </ul>
        </div>
        <div className='player-bio'>
          <ul>
            <li className='born'>
              <span className='label'>Born: </span>
              {birthMonth}/{birthDay}/{birthYear} in {BirthCity}, {BirthState ? BirthState : BirthCountry}
            </li>
            {College !== "None" ? <li>
              <span className='label'>College: </span>
              {College}
            </li> : null}
            <li>
              <span className='label'>Debut: </span>
              {proDebutMonth}/{proDebutDay}/{proDebutYear}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PlayerDetails