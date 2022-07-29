import { useEffect, useState } from 'react'
import { baseurlPlayer, APIKEY } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import './TeamDetails.css'

const TeamDetails = () => {
  const [teamInfo, setTeamInfo] = useState()

  const params = useParams()

  const obj = new URLSearchParams(params);

  const term = obj.get('Team')

  let results = `${baseurlPlayer}/Players/${term}?key=${APIKEY}`


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

  return (
    <>
      <div className='team-roster-container'>
        {active?.map(({ FirstName, MLBAMID, LastName, PlayerID }) => (
          <Card key={MLBAMID} >
            <div className='player-info'>
              {FirstName && <h2><a href={`/player/${PlayerID}`}>{FirstName} {LastName}</a></h2>}
            </div>
          </Card>
        ))
        }
      </div>
    </>
  )
}

export default TeamDetails