import { useState } from 'react'
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


  return (
    <div className='league'>
      <label>
        <select value={filteredResults} onChange={handleChange}>
          <option multiple={false} value={"Choose a Division or League"}>Choose</option>
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
      {displayData?.map(({ StadiumID, team_id, website_url, logo, name_display_full, address_line1, address_city, address_state, address_zip, phone_number, venue_name }) => (
        <Card key={name_display_full}>
          <div className='insidecard'>
            {website_url ? <h2><a href={`https://${website_url}`} target="_blank" rel='noreferrer'>{name_display_full}</a></h2> : <h2>{name_display_full}</h2>}
            <h5 className='venue'>{venue_name}</h5>
            <img src={logo} alt='Team Logo' />
            {address_line1 ? <h4>{address_line1}, {address_city}, {address_state} {address_zip}</h4> : null}
            <h5>{phone_number}</h5>
          </div>
        </Card>
      ))
      }
    </div>
  )
}

export default League