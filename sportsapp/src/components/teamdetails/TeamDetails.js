import { useEffect, useState } from 'react'
import { baseURL } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'


const TeamDetails = () => {
  const [info, setInfo] = useState()

  const params = useParams()

  const obj = new URLSearchParams(params);

  let result = `${baseURL}/json/named.roster_40.bam?${obj}`

  useEffect(() => {
    const fetchTeams = async (team_id) => {
      try {
        const response = await fetch(result)
        let data = await response.json()
        let teamInfo = data?.roster_40.queryResults.row.map((item) => item)
        setInfo(teamInfo)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTeams()
  }, [])



  return (
    <>
      {info?.map(({ name_display_first_last }) => (
        <Card>
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
            {name_display_first_last}
          </div>
        </Card>
      ))
      }
    </>
  )
}

export default TeamDetails