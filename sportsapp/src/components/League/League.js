import { useState } from 'react'
import Team from '../Team/Team'
import Card from '../card/Card'
import './League.css'
import teamData from '../../teams.json'
import { baseURL } from '../../api/Api'


// 2 Buttons one that when clicked shows the AL Teams and another that shows the NL when clicked

const League = ({ team }) => {

  const [toggle, setToggle] = useState(false)

  console.log(team)

  const triggleToggle = () => {
    setToggle(!toggle)
  }

  let NL = teamData?.queryResults.row.filter((team) => team.league_full === 'National League')
  let AL = teamData?.queryResults.row.filter((team) => team.league_full === 'American League')

  let result = toggle ? NL : AL

  console.log(result)

  let AmericanLeague = result?.filter((american) => american.mlb_org === "American League")
  let NationalLeague = result?.filter((national) => national.mlb_org === "National League")

  return (
    <div className='league'>
      {toggle ? <button className='togglebtn' onClick={triggleToggle}>Toggle to AL</button> : <button className='togglebtn' onClick={triggleToggle}>Toggle to NL</button>}
      {result?.map(({ name_display_full, logo, team_id }) => (
        <Card>
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
            {team_id ? <h2><a style={{ 'textDecoration': 'none', 'color': 'black' }} href={`/team/${team_id}`}>{name_display_full}</a></h2> : <h2>{name_display_full}</h2>}
            <img style={{ 'height': '250px', 'width': '250px' }} src={logo} alt='Team Logo' />
          </div>
        </Card>
      ))

      }
    </div>
  )
}

export default League