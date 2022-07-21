import Card from '../card/Card'
import teamData from '../../teams.json'

const Team = () => (
  <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
    {teamData?.queryResults.row.map(({ website_url, logo, name_display_full, address_line1, address_city, address_state, address_zip, phone_number }) => (
      <Card key={name_display_full}>
        <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
          {website_url ? <h2><a style={{ 'textDecoration': 'none', 'color': 'black' }} href={`https://${website_url}`} target="_blank" rel='noreferrer'>{name_display_full}</a></h2> : <h2>{name_display_full}</h2>}
          <img style={{ 'height': '250px', 'width': '250px' }} src={logo} alt='Team Logo' />
          <h4>{address_line1}, {address_city} {address_state} {address_zip}</h4>
          <h6>{phone_number}</h6>
        </div>
      </Card>
    ))
    }
  </div >
)

export default Team