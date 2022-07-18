import { useEffect, useState } from 'react'
import { baseURL } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'



const PlayerDetails = () => {
  const [playerInfo, setPlayerInfo] = useState()

  const params = useParams()

  const obj = new URLSearchParams(params);

  let results = `http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&${obj}`
  console.log(results)




  useEffect(() => {
    const playerData = async () => {
      try {
        const response = await fetch(results)
        const playerInfo = await response.json()
        let base = playerInfo?.player_info?.queryResults.row
        console.log(playerInfo)
        setPlayerInfo(base)
      } catch (error) {
        console.log(error)
      }
    }
    playerData()
  }, [results])



  return (
    <>
      <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
        <Card >
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
            {playerInfo?.college ? <h2 style={{ 'width': '280px' }}>College: {playerInfo.college}</h2> : <h2>No College</h2>}
            <h4>Age: {playerInfo?.age}</h4>
            <h6>Throws: {playerInfo?.throws}</h6>
            <h5>Bats: {playerInfo?.bats}</h5>
          </div>
        </Card>
      </div>
    </>
  )
}

export default PlayerDetails