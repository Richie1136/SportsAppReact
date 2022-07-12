import { useState } from 'react'
import Team from '../Team/Team'
import Player from '../Player/Player'
import Card from '../card/Card'

// 2 Buttons one that when clicked shows the AL Teams and another that shows the NL when clicked

const League = (team) => {

  const [toggle, setToggle] = useState(false)

  const triggleToggle = () => {
    setToggle(!toggle)
  }

  let NL = team?.team?.queryResults.row.filter((team) => team.league_full === 'National League')
  let AL = team?.team?.queryResults.row.filter((team) => team.league_full === 'American League')

  let result = toggle ? NL : AL


  return (
    <div style={{ 'display': 'flex', 'flexWrap': 'wrap' }}>
      {result?.map(({ name_display_full }) => (
        <Card>
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
            <h2>{name_display_full}</h2>
            {toggle ? <button onClick={triggleToggle}>Toggle to AL</button> : <button onClick={triggleToggle}>Toggle to NL</button>}
          </div>
        </Card>
      ))
      }
    </div>
  )
}

export default League