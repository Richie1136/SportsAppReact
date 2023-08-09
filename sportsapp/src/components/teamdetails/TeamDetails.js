import { useEffect, useState } from 'react'
import { baseurlPlayer } from '../../api/Api'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import './TeamDetails.css'
import Loading from '../loading/Loading'


const TeamDetails = () => {
  const [teamInfo, setTeamInfo] = useState()

  const APIKEY = process.env.REACT_APP_API_KEY

  const params = useParams()
  const obj = new URLSearchParams(params);
  const term = obj.get('Team')
  console.log(term)
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

  if (!teamInfo) return <Loading />

  let sortJerseyAscending = active.sort((a, b) => a.Jersey - b.Jersey)

  return (
    <>
      <div className='team-roster-container'>
        {active?.map(({ FirstName, MLBAMID, LastName, PlayerID, Jersey }) => (
          <Card key={MLBAMID} >
            <div className='player-info'>
              <h2><a href={`/player/${PlayerID}`}>{FirstName} {LastName}</a></h2>
              <h4>{Jersey}</h4>
            </div>
          </Card>
        ))
        }
      </div>
    </>
  )
}

export default TeamDetails