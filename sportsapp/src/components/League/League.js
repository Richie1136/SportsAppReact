import { useState, useEffect } from 'react'
import Card from '../card/Card'
import './League.css'
import leagueDataInfo from '../../teams.json'
import { baseurlPlayer } from '../../api/Api'


const League = () => {
  const [leagueData, setLeagueData] = useState([])
  const [initialTeams, setIntialTeams] = useState(leagueData)
  const [filteredResults, setFilteredResults] = useState(undefined)
  const [teamData3, setTeamData3] = useState([])
  const [initialTeams2, setInititalTeams2] = useState(teamData3)

  const APIKEY = process.env.REACT_APP_API_KEY


  let teamData2 = `${baseurlPlayer}/teams?key=${APIKEY}`

  let teamData = "http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code=%27mlb%27&all_star_sw=%27N%27&sort_order=name_asc&season=%272023%27"

  useEffect(() => {
    const leagueData = async () => {
      try {
        const response = await fetch(teamData)
        let initialTeams = await response.json()
        setLeagueData(initialTeams)
      } catch (error) {
        console.log(error)
      }
    }
    leagueData()
  }, [teamData])




  useEffect(() => {
    const teamData = async () => {
      try {
        const response = await fetch(teamData2)
        const teamData = await response.json()
        setTeamData3(teamData)
      } catch (error) {
        console.log(error)
      }
    }
    teamData()
  }, [teamData2])

  let allTeams = leagueData?.team_all_season?.queryResults?.row
  let displayData = allTeams


  let dataInfo = leagueDataInfo?.queryResults.row

  let urls = dataInfo?.map(({ base_url }) => (
    base_url
  ))

  let logos = dataInfo?.map(({ logo, Key }) => (
    logo
  ))


  let result = displayData?.map((o, i) => ({ ...o, logo: logos[i], url: urls[i] }))

  let NL = result?.filter((team) => team.league_full === 'National League')
  let AL = result?.filter((team) => team.league_full === 'American League')
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
    result = allTeams
  }
  if (initialTeams === 'AL') {
    result = AL
  }
  if (initialTeams === "AL East") {
    result = ALE
  }
  if (initialTeams === 'AL Central') {
    result = ALC
  }
  if (initialTeams === 'AL West') {
    result = ALW
  }
  if (initialTeams === 'NL') {
    result = NL
  }
  if (initialTeams === "NL East") {
    result = NLE
  }
  if (initialTeams === 'NL Central') {
    result = NLC
  }
  if (initialTeams === 'NL West') {
    result = NLW
  }


  return (
    <div className='league'>
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
      {result?.map(({ StadiumID, name_display_long, team_id, logo, url, website_url, name_display_full, address_line1, address_city, address_state, address_zip, phone_number, venue_name }) => (
        <Card key={name_display_full}>
          <div className='insidecard'>
            <h2>{}</h2>
            <a style={{ textDecoration: 'none', color: 'black' }} href={`${url}`} target='_blank' rel='noreferrer'><h2>{name_display_long} Website</h2></a>
            <img src={logo} alt={name_display_long} />
            <h5 className='venue'>Venue Name: {venue_name}</h5>
            {address_line1 && <h4>{address_line1}, {address_city}, {address_state} {address_zip}</h4>}
            <h5>{phone_number}</h5>
          </div>
        </Card>
      )
      )}
    </div>
  )
}

export default League