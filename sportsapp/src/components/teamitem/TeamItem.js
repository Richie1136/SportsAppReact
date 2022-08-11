import Card from '../card/Card'
import FavoritesContext from '../../store/FavoritesContext'
import { useContext } from 'react'
import './TeamInfo.css'


const TeamItem = ({ name, logo, id, name_display_full, team_id, Team }) => {
  const context = useContext(FavoritesContext)

  const TeamIsFavorite = context.isTeamFavorite(id)
  const toggleFavoriteStatus = () => {
    if (TeamIsFavorite) {
      context.removeFavorite(id)
    } else {
      context.addFavorite({
        id, logo, name
      })
    }
  }


  return (
    <>
      <div className='container'>
        <Card key={name_display_full}>
          <div className='team-info'>
            {team_id ? <h2><a href={`/${Team}`}>{name_display_full}</a></h2> : <h2>{name_display_full}</h2>}
            {console.log(name_display_full)}
            <img src={logo} alt='Team Logo' />
          </div>
          <button onClick={toggleFavoriteStatus}>{TeamIsFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
        </Card>
      </div>
    </>
  )
}

export default TeamItem