import Card from '../card/Card'
import teamData from '../../teams.json'

const Team = () => (
  <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
    {teamData?.queryResults?.row.map(({ name_display_full, logo, team_id, Team }) => (
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

export default Team