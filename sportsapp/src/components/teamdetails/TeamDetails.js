import { useEffect, useState } from 'react'
import { baseURL } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import teamData from '../../teams.json'


const TeamDetails = () => {
  const [info, setInfo] = useState()

  const params = useParams()

  const obj = new URLSearchParams(params);

  let result = `${baseURL}/json/named.roster_40.bam?${obj}`

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
        {info?.map(({ name_display_first_last, player_id, team_name, position_txt, birth_date }) => (
          <Card key={player_id} >
            <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
              <h4>{name_display_first_last}</h4>
              {position_txt}
              {console.log(birth_date.split("-")[0])}
              <h4>Age: {year - birth_date.split("-")[0]}</h4>
              {/* {Date.now()} */}
              {/* {birth_date.toString()} */}
            </div>
          </Card>
        ))
        }
      </div>
    </>
  )
}

export default TeamDetails