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
        {info?.map(({ name_display_first_last, player_id, team_name, position_txt }) => (
          <Card key={player_id} >
            <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
              {name_display_first_last}
              {position_txt}
            </div>
          </Card>
        ))
        }
      </div>
    </>
  )
}

export default TeamDetails