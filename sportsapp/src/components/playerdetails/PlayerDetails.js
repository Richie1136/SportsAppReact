import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseurlPlayer, APIKEY } from '../../api/Api'
import './PlayerDetails.css'




const PlayerDetails = () => {
  const [playerData, setPlayerData] = useState()

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


  let result = Number(playerData?.Height / 12).toFixed(1)
  let feet = Number(result.toString().split(".")[0])
  let inches = Number(result.toString().split(".")[1])



  let date = playerData?.BirthDate

  date = new Date(date).toLocaleDateString().split("/")

  let birthMonth = date[0] < 10 ? `0${date[0]}` : `${date[0]}`
  let birthDay = date[1] < 10 ? `0${date[1]}` : `${date[1]}`
  let birthYear = date[2]

  let proDebut = playerData?.ProDebut
  proDebut = new Date(proDebut).toLocaleDateString().split("/")
  let proDebutMonth = proDebut[0] < 10 ? `0${proDebut[0]}` : `${proDebut[0]}`
  let proDebutDay = proDebut[1] < 10 ? `0${proDebut[1]}` : `${proDebut[1]}`
  let proDebutYear = proDebut[2]


  return (
    <>
      <div className='player-header'>
        <img className='player-photo' src={playerData?.PhotoUrl} alt='Bio Card' />
        <div className='player-vitals'>
          <h1>
            <span className='player-header-name'>{playerData?.FirstName} {playerData?.LastName}</span>
            <span className='player-header-number'>#{playerData?.Jersey}</span>
          </h1>
          <ul>
            <li>{playerData?.Position}</li>
            <li>B/T: {playerData?.BatHand}/{playerData?.ThrowHand}</li>
            <li className='player-header-height'>{feet}'{inches}"/{playerData?.Weight}</li>
            <li className='player-header-age'>Age: {year - playerData?.BirthDate.split("-")[0]}</li>
          </ul>
        </div>
        <div className='player-bio'>
          <ul>
            <li style={{ 'width': '285px', 'flexWrap': 'nowrap' }}>
              <span className='label'>Born: </span>
              {birthMonth}/{birthDay}/{birthYear} in {playerData?.BirthCity}, {playerData?.BirthState ? playerData?.BirthState : playerData?.BirthCountry}
            </li>
            {playerData?.College !== "None" ? <li>
              <span className='label'>College: </span>
              {playerData?.College}
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