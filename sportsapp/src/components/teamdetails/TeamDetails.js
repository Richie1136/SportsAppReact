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
  const term = obj.get('Key')
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

  console.log(teamInfo)


  let currentPlayers = teamInfo?.filter((status) => status.Status === 'Active')

  if (!teamInfo) return <Loading />

  let sortJerseyAscending = currentPlayers?.filter((jerseyNum) => jerseyNum.Jersey !== null).sort((a, b) => a.Jersey - b.Jersey)


  return (
    <>
      <div className='team-roster-container'>
        {sortJerseyAscending?.map(({ FirstName, MLBAMID, LastName, PlayerID, Jersey }) => (
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