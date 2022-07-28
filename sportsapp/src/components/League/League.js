import { useState, useEffect } from 'react'
import Card from '../card/Card'
import './League.css'
import teamData from '../../teams.json'


const League = () => {

  const [initialTeams, setIntialTeams] = useState(teamData)
  const [filteredResults, setFilteredResults] = useState(null)


  let displayData = []

  let allTeams = teamData?.queryResults?.row


  let NL = teamData?.queryResults.row.filter((team) => team.league_full === 'National League')
  let AL = teamData?.queryResults.row.filter((team) => team.league_full === 'American League')


  let ALE = AL?.filter((status) => status.division).filter((league) => league.league === 'AL').filter((division) => division.division === 'E')
  let ALC = AL?.filter((status) => status.division).filter((league) => league.league === 'AL').filter((division) => division.division === 'C')
  let ALW = AL?.filter((status) => status.division).filter((league) => league.league === 'AL').filter((division) => division.division === 'W')
  let NLE = NL?.filter((status) => status.division).filter((league) => league.league === 'NL').filter((division) => division.division === 'E')
  let NLC = NL?.filter((status) => status.division).filter((league) => league.league === 'NL').filter((division) => division.division === 'C')
  let NLW = NL?.filter((status) => status.division).filter((league) => league.league === 'NL').filter((division) => division.division === 'W')

  console.log(initialTeams)


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
    console.log(initialTeams)
    displayData = ALE
    console.log(displayData)
  }

  if (initialTeams === 'AL Central') {
    displayData = ALC
    console.log(displayData)
  }

  if (initialTeams === 'AL West') {
    displayData = ALW
  }


  if (initialTeams === 'NL') {
    displayData = NL
  }

  if (initialTeams === "NL East") {
    console.log(initialTeams)
    displayData = NLE
    console.log(displayData)
  }

  if (initialTeams === 'NL Central') {
    displayData = NLC
    console.log(displayData)
  }

  if (initialTeams === 'NL West') {
    displayData = NLW
  }

  return (
    <div className='league'>
      <label style={{ 'marginTop': '10px', 'position': 'fixed' }}>
        <select value={filteredResults} onChange={handleChange}>
          <option multiple={false} value={"Choose a Division or League"}>Choose</option>
          <option multiple={false} value={"ALL"}>ALL</option>
          <option multiple={false} value={"AL"}>AL</option>
          <option multiple={false} value={"AL Central"}>AL Central</option>
          <option multiple={false} value={"AL East"}>AL East</option>
          <option multiple={false} value={"AL West"}>AL West</option>
          <option multiple={false} value={"NL"}>NL</option>
          <option multiple={false} value={"NL East"}>NL East</option>
          <option multiple={false} value={"NL Central"}>NL Central</option>
          <option multiple={false} value={"NL West"}>NL West</option>
        </select>
      </label>
      {displayData?.map(({ name_display_full, logo, team_id, Team }) => (
        <Card key={name_display_full}>
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
            {team_id ? <h2><a style={{ 'textDecoration': 'none', 'color': 'black' }} href={`/${Team}`}>{name_display_full}</a></h2> : <h2>{name_display_full}</h2>}
            <img style={{ 'height': '250px', 'width': '250px' }} src={logo} alt='Team Logo' />
          </div>
        </Card>
      ))
      }
    </div>
  )
}

export default League
