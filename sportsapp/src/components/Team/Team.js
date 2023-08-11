import Card from '../card/Card'
import teamData from '../../teams.json'
import './Team.css'
import { useState } from 'react'

const Team = () => {
  const [initialTeams, setIntialTeams] = useState(teamData)
  const [filteredResults, setFilteredResults] = useState(undefined)


  let allTeams = teamData?.queryResults?.row
  let displayData = allTeams

  let NL = teamData?.queryResults.row.filter((team) => team.league_full === 'National League')
  let AL = teamData?.queryResults.row.filter((team) => team.league_full === 'American League')
  let ALE = AL?.filter((status) => status.division).filter((league) => league.league === 'AL').filter((division) => division.division === 'E')
  let ALC = AL?.filter((status) => status.division).filter((league) => league.league === 'AL').filter((division) => division.division === 'C')
  let ALW = AL?.filter((status) => status.division).filter((league) => league.league === 'AL').filter((division) => division.division === 'W')
  let NLE = NL?.filter((status) => status.division).filter((league) => league.league === 'NL').filter((division) => division.division === 'E')
  let NLC = NL?.filter((status) => status.division).filter((league) => league.league === 'NL').filter((division) => division.division === 'C')
  let NLW = NL?.filter((status) => status.division).filter((league) => league.league === 'NL').filter((division) => division.division === 'W')

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

  console.log(filteredResults)



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
      {displayData?.map(({ name_display_full, logo, team_id, Team }) => (
        <Card key={name_display_full}>
          <div className='team-info'>
            {team_id ? <h2><a href={`/${Team}`}>{name_display_full} Roster</a></h2> : <h2>{name_display_full}</h2>}
            <img src={logo} alt='Team Logo' />
          </div>
        </Card>
      ))
      }
    </div>

  )

}


export default Team