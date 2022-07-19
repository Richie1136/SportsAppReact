import { useEffect, useState } from 'react'
// import { baseURL } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import { baseURL, baseurlPlayer, APIKEY } from '../../api/Api'




const PlayerDetails = () => {
  const [playerData, setPlayerData] = useState()

  const params = useParams()

  const obj = new URLSearchParams(params);

  // let results = `http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&${obj}`
  // let results = https://api.sportsdata.io/v3/mlb/scores/json/Player/10000381
  // const params = useParams()

  // const obj = new URLSearchParams(params);

  const term = obj.get('player_id')

  let results = `${baseurlPlayer}/Player/${term}?key=${APIKEY}`
  console.log(results)


  const today = new Date();
  const year = today.getFullYear();

  useEffect(() => {
    const playerData = async () => {
      try {
        const response = await fetch(results)
        const playerInfo = await response.json()
        console.log(playerInfo)
        setPlayerData(playerInfo)
      } catch (error) {
        console.log(error)
      }
    }
    playerData()
  }, [results])


  let result = Number(parseFloat(playerData?.Height / 12).toFixed(1))
  let feet = Number(result.toString().split(".")[0])
  let inches = Number(result.toString().split(".")[1])


  let date = playerData?.BirthDate

  date = new Date(date).toLocaleDateString().split("/")

  let birthMonth = date[0] < 10 ? `0${date[0]}` : `${date[0]}`
  let birthDay = date[1] < 10 ? `0${date[1]}` : `${date[1]}`
  console.log(date[1])
  let birthYear = date[2]

  // let birthYear = playerData?.BirthDate.split("-")[0]
  // console.log(birthYear)
  // let birthMonth = playerData?.BirthDate.split("-")[1]
  // console.log(birthMonth)

  // let birthDay = playerData?.BirthDate.split("-")[2]
  // console.log(Date(birthDay))


  // let dateString = playerData?.BirthDate;
  // dateString = new Date(dateString).toLocaleDateString();
  // dateString = dateString.split('/').slice(0, 4).join(' ');
  // console.log(dateString[0]);

  // let month = dateString[0] < 10 ? `0${dateString[0]} : ${dateString[0]}`

  // const format = () => {
  //   if (dateString[0] < 10) {
  //     console.log(`0${dateString}`)
  //     return `0${dateString[0]}`
  //   } else {
  //     return `${dateString[0]}`
  //   }
  // }

  // format()

  // let born = format(dateString[0]) + dateString[1]
  // console.log(born)

  return (
    <>
      <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
        <Card>
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
            <img src={playerData?.PhotoUrl} alt='Bio Card' />
            <h1>{playerData?.FirstName} {playerData?.LastName}</h1>
            {playerData?.College ? <h2 style={{ 'width': '280px' }}>College: {playerData?.College}</h2> : <h2>No College</h2>}
            <h4>Age: {year - playerData?.BirthDate.split("-")[0]}</h4>
            <h6>Throws: {playerData?.ThrowHand}</h6>
            <h4>Position: {playerData?.Position}</h4>
            <h4>Height: {feet}`{inches}"</h4>
            <h4>Weight: {playerData?.Weight}</h4>
            <h5>Born: {birthMonth}/{birthDay}/{birthYear} in {playerData?.BirthCity}, {playerData?.BirthState}</h5>
            <h5>Bat: {playerData?.Position !== "SP" || playerData?.Position !== "RP" ? playerData?.BatHand : null}</h5>
            <h4># {playerData?.Jersey}</h4>
          </div>
        </Card>
      </div>
    </>
  )
}

export default PlayerDetails