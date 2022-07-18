import { useState } from 'react'
import Team from '../Team/Team'
import Card from '../card/Card'
import './League.css'
import teamData from '../../teams.json'


// 2 Buttons one that when clicked shows the AL Teams and another that shows the NL when clicked

const League = ({ team }) => {

  const [toggle, setToggle] = useState(false)

  const triggleToggle = () => {
    setToggle(!toggle)
  }

  let NL = teamData?.queryResults.row.filter((team) => team.league_full === 'National League')
  let AL = teamData?.queryResults.row.filter((team) => team.league_full === 'American League')

  let result = toggle ? NL : AL

  console.log(result)

  return (
    <div className='league'>
      {toggle ? <button className='togglebtn' onClick={triggleToggle}>Toggle to AL</button> : <button className='togglebtn' onClick={triggleToggle}>Toggle to NL</button>}
      {result?.map(({ name_display_full, logo, team_id, name, Team }) => (
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