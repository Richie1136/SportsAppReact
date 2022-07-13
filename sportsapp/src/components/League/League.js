import { useState } from 'react'
import Team from '../Team/Team'
import Card from '../card/Card'
import './League.css'

// 2 Buttons one that when clicked shows the AL Teams and another that shows the NL when clicked

const League = (team) => {

  const [toggle, setToggle] = useState(false)

  const triggleToggle = () => {
    setToggle(!toggle)
  }

  let NL = team?.team?.queryResults.row.filter((team) => team.league_full === 'National League')
  let AL = team?.team?.queryResults.row.filter((team) => team.league_full === 'American League')

  // let AmericanLeague = team?.team?.queryResults.filter((american) => american.mlb_org === "American League")
  // let NationalLeague = team?.team?.queryResults.filter((national) => national.name_display_full === 'National League')

  // console.log(AmericanLeague)

  // console.log(team?.team?.queryResults)

  let result = toggle ? NL : AL

  console.log(result)

  let AmericanLeague = result?.filter((american) => american.mlb_org === "American League")
  let NationalLeague = result?.filter((national) => national.mlb_org === "National League")



  return (
    <div className='league'>
      {/* {toggle && <button onClick={triggleToggle}>{!toggle}</button>} */}
      {/* <ReactSwitch onChange={triggleToggle} checked={toggle === "National League"} /> */}

      {toggle ? <button className='togglebtn' onClick={triggleToggle}>Toggle to AL</button> : <button className='togglebtn' onClick={triggleToggle}>Toggle to NL</button>}
      {result?.map(({ name_display_full, logo }) => (
        <Card>
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
            <h2>{name_display_full}</h2>
            <img style={{ 'height': '250px', 'width': '250px' }} src={logo} alt='Team Logo' />
          </div>
        </Card>
      ))
      }
    </div>
  )
}

export default League