
import Card from '../card/Card'

const Team = ({ team }) => (
  <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
    {team?.queryResults.row.map(({ website_url, logo, name_display_full, address_line1, address_city, address_state, address_zip, phone_number }) => (
      <Card>
        <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }} key={name_display_full}>
          <h2><a style={{ 'textDecoration': 'none', 'color': 'black' }} href={`https://${website_url}`} target="_blank" rel='noreferrer'>{name_display_full}</a></h2>
          <img src={logo} alt='Team Logo' />
          <h4>{address_line1}, {address_city} {address_state} {address_zip}</h4>
          <h6>{phone_number}</h6>
        </div>
      </Card>
    ))
    }
  </div >
)

export default Team