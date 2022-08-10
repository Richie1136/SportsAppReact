import { useContext } from 'react'
import FavoritesContext from '../../store/FavoritesContext'
import Team from '../Team/Team'

const Favorites = ({ name_display_full, logo, team_id, Team }) => {
  const context = useContext(FavoritesContext)
  let isTeamFavorite;

  if (context.totalFavorites === 0) {
    isTeamFavorite = <p>No Favorites</p>
  } else {
    isTeamFavorite = <Team teamData={context.favorites} />
  }

  return (
    <div>
      <h1>My Favorites</h1>
      {console.log(isTeamFavorite)}
    </div>
  )
}

export default Favorites