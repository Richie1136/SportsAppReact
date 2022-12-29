import Card from '../card/Card'
import teamData from '../../teams.json'
import './Team.css'

const Team = () => (
  <div className='container'>
    {teamData?.queryResults?.row.map(({ name_display_full, logo, team_id, Team }) => (
      <Card key={name_display_full}>
        <div className='team-info'>
          {team_id ? <h2><a href={`/${Team}`}>{name_display_full}</a></h2> : <h2>{name_display_full}</h2>}
          <img src={logo} alt='Team Logo' />
        </div>
      </Card>
    ))
    }
  </div>
)

export default Team