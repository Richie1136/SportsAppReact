import Card from '../card/Card'
import { baseurlPlayer } from '../../api/Api'
import './Team.css'
import { useState, useEffect } from 'react'

const Team = () => {
  const [teamData, setTeamData] = useState([])
  const [initialTeams, setIntialTeams] = useState(teamData)
  const APIKEY = process.env.REACT_APP_API_KEY


  let teamData2 = `${baseurlPlayer}/teams?key=${APIKEY}`

  useEffect(() => {
    const teamData = async () => {
      try {
        const response = await fetch(teamData2)
        const teamData = await response.json()
        setTeamData(teamData)
      } catch (error) {
        console.log(error)
      }
    }
    teamData()
  }, [teamData2])
  const [filteredResults, setFilteredResults] = useState(undefined)

  let allTeams = teamData
  let displayData = allTeams

  console.log(teamData)

  let NL = teamData?.filter((team) => team.League === 'NL')
  let AL = teamData?.filter((team) => team.League === 'AL')
  let ALE = AL?.filter((division) => division.Division === 'East')
  let ALC = AL?.filter((division) => division.Division === 'Central')
  let ALW = AL?.filter((division) => division.Division === 'West')
  let NLE = NL?.filter((division) => division.Division === 'East')
  let NLC = NL?.filter((division) => division.Division === 'Central')
  let NLW = NL?.filter((division) => division.Division === 'West')

  const handleChange = (event) => {
    setIntialTeams(event.target.value)
  }

  if (initialTeams === 'ALL') {
    displayData = allTeams
  }
  if (initialTeams === 'AL') {
    displayData = AL
  }
  if (initialTeams === "AL East") {
    displayData = ALE
  }
  if (initialTeams === 'AL Central') {
    displayData = ALC
  }
  if (initialTeams === 'AL West') {
    displayData = ALW
  }
  if (initialTeams === 'NL') {
    displayData = NL
  }
  if (initialTeams === "NL East") {
    displayData = NLE
  }
  if (initialTeams === 'NL Central') {
    displayData = NLC
  }
  if (initialTeams === 'NL West') {
    displayData = NLW
  }

  console.log(displayData)

  return (
    <div className='container'>
      <label>
        <select value={filteredResults} onChange={handleChange}>
          <option multiple={false} value={"ALL"}>ALL</option>
          <option multiple={false} value={"AL"}>AL</option>
          <option multiple={false} value={"AL East"}>AL East</option>
          <option multiple={false} value={"AL Central"}>AL Central</option>
          <option multiple={false} value={"AL West"}>AL West</option>
          <option multiple={false} value={"NL"}>NL</option>
          <option multiple={false} value={"NL East"}>NL East</option>
          <option multiple={false} value={"NL Central"}>NL Central</option>
          <option multiple={false} value={"NL West"}>NL West</option>
        </select>
      </label>
      {displayData?.map(({ name_display_full, TertiaryColor, PrimaryColor, HeadCoach, PitchingCoach, HittingCoach, Key, TeamID, City, logo, team_id, Team, Name, WikipediaLogoUrl }) => (
        <Card key={name_display_full}>
          <div className='team-info'>
            {Key ? <h2 style={{ height: '55px' }}><a href={`/${Key}`}>{City} {Name} Roster</a></h2> : <h2>{City} {Name}</h2>}
            <h4 style={{ color: '#' + PrimaryColor, marginBottom: '0' }}>Manager: {HeadCoach}</h4>
            <h5>Hitting Coach: {HittingCoach}</h5>
            <h5>Pitching Coach: {PitchingCoach}</h5>
            <img src={WikipediaLogoUrl} alt='Team Logo' />
          </div>
        </Card>
      ))
      }
    </div>
  )
}
export default Team