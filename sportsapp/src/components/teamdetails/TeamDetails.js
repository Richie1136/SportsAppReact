import { useEffect, useState } from 'react'
import { baseurlPlayer, APIKEY } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'

const TeamDetails = () => {
  const [teamInfo, setTeamInfo] = useState()

  const params = useParams()

  const obj = new URLSearchParams(params);
  console.log(obj.values())

  const term = obj.get('Team')

  let results = `${baseurlPlayer}/Players/${term}?key=${APIKEY}`
  console.log(results)


  useEffect(() => {
    const teamData = async () => {
      try {
        const response = await fetch(results)
        let teamInfo = await response.json()
        setTeamInfo(teamInfo)
      } catch (error) {
        console.log(error)
      }
    }
    teamData()
  }, [])

  let active = teamInfo?.filter((status) => status.Status === 'Active')
  console.log(active)

  return (
    <>
      <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
        {active?.map(({ FirstName, MLBAMID, LastName, PlayerID }) => (
          <Card key={MLBAMID} >
            <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
              {FirstName && <h2><a style={{ 'textDecoration': 'none', 'color': 'black' }} href={`/player/${PlayerID}`}>{FirstName} {LastName}</a></h2>}
            </div>
          </Card>
        ))
        }
      </div>
    </>
  )
}

export default TeamDetails