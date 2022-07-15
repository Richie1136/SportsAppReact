import { useEffect, useState } from 'react'
import { baseURL, baseurlPlayer, APIKEY } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import teamData from '../../teams.json'
// import { baseurlPlayer, APIKEY } from '../api/Api'



const TeamDetails = () => {
  const [info, setInfo] = useState()
  const [getdetails, setDetails] = useState()

  const params = useParams()

  const obj = new URLSearchParams(params);

  let result = `${baseURL}/json/named.roster_40.bam?${obj}`

  let playerResults = `${baseurlPlayer}/Players?key=${APIKEY}`

  // const {player_id} = getdetails?.map(({ PlayerID }) => (

  // ))}


  const player_id = getdetails?.map(({ PhotoUrl, PlayerID, active }) => (
    <>
      {PlayerID}
      {active}
      {console.log(PlayerID)}
    </>
  ))

  console.log(player_id)

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const response = await fetch(playerResults)
        let data = await response.json()
        let playerInfo = data?.map((item) => item)
        console.log(playerInfo)
        // console.log(playerInfo)
        setDetails(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPlayerDetails()
  }, [playerResults])

  // let today = new Date(getFullYear())
  // console.log(today)

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()
  const day = today.getDate()
  console.log(day)
  console.log(year)

  let fullYear = `${year}:${month}:${day}`
  console.log(fullYear)

  // {getdetails.map(({player_id}))}

  // const format = (item) => {
  //   if (month < 10) {
  //     // This will prefix 0 zero if the time goes below 10
  //     return `0${month}`
  //   } else {
  //     return item
  //   }
  // }

  // format(fullYear)

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




  return (
    <>
      <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
        {info?.map(({ name_display_first_last, team_name, position_txt, birth_date, player_id, PlayerID }) => (
          <Card >
            <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
              <h4>{name_display_first_last}</h4>
              {position_txt}
              {name_display_first_last && <h2><a style={{ 'textDecoration': 'none', 'color': 'black' }} href={`/player/${PlayerID}`}>{name_display_first_last}</a></h2>}
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