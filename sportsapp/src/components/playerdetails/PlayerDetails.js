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
  console.log(obj.values())

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


  let height = String(playerData?.Height / 12).split(".")
  let whole = Number(height[0])
  // let inches = Number(height[1])

  let inches = playerData?.Height / 12
  console.log(whole)
  console.log(inches)

  return (
    <>
      <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
        <Card>
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
            <img src={playerData?.PhotoUrl} alt='Bio Card' />
            <h1>{playerData?.FirstName} {playerData?.LastName}</h1>
            {playerData?.college ? <h2 style={{ 'width': '280px' }}>College: {playerData.college}</h2> : <h2>No College</h2>}
            <h4>Age: {year - playerData?.BirthDate.split("-")[0]}</h4>
            <h6>Throws: {playerData?.ThrowHand}</h6>
            <h4>Position: {playerData?.Position}</h4>
            <h4>{playerData?.Height / 12}</h4>
            <h5>Bat: {playerData?.Position !== "SP" || playerData?.Position !== "RP" ? playerData?.BatHand : null}</h5>
            <h4># {playerData?.Jersey}</h4>
          </div>
        </Card>
      </div>
    </>
  )
}

export default PlayerDetails