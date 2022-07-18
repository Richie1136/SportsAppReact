import { useEffect, useState } from 'react'
import { baseURL, baseurlPlayer, APIKEY } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'




const TeamDetails = () => {
  const [info, setInfo] = useState()

  const params = useParams()

  const obj = new URLSearchParams(params);

  let result = `${baseURL}/json/named.roster_40.bam?${obj}`

  let playerResults = `${baseurlPlayer}/Players?key=${APIKEY}`

  const today = new Date();
  const year = today.getFullYear();



  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(result)
        let data = await response.json()
        let teamInfo = data?.roster_40.queryResults.row.map((item) => item)
        console.log(teamInfo)
        setInfo(teamInfo)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTeams()
  }, [])


  // useEffect(() => {
  //   const getPlayerDetails = async () => {
  //     try {
  //       const response = await fetch(playerResults)
  //       let data = await response.json()
  //       let playerInfo = data?.map((item) => item)
  //       // console.log(playerInfo)
  //       setPlayerID(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getPlayerDetails()
  // }, [])

  // console.log(typeof info)




  // let getPlayerId = playerID?.map(({ MLBAMID }) => console.log(typeof Number(MLBAMID)))
  // let getPlayer1 = info?.map(({ player_id }) => console.log(typeof Number(player_id)))
  // let getPlayer1 = info?.filter((playerid) => playerid.player_id === Number('571578'))


  // console.log(getPlayerId)

  // if (getPlayerId === getPlayer1) {
  //   console.log("SAme")
  // }

  // let saem = getPlayer1 === getPlayerId

  // console.log(playerID)



  return (
    <>
      <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
        {info?.map(({ name_display_first_last, team_name, position_txt, birth_date, player_id, PlayerID, MLBAMID }) => (
          <Card key={player_id}>
            <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
              <h4>{name_display_first_last}</h4>
              {position_txt}
              {player_id}
              {name_display_first_last && <h2><a style={{ 'textDecoration': 'none', 'color': 'black' }} href={`/player/${player_id}`}>{name_display_first_last}</a></h2>}
              <h4>Age: {year - birth_date.split("-")[0]}</h4>
            </div>
          </Card>
        ))
        }
      </div>
    </>
  )
}

export default TeamDetails