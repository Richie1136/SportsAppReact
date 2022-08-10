import Card from '../card/Card'
import FavoritesContext from '../../store/FavoritesContext'
import { useContext } from 'react'


const TeamItem = ({ name, logo, id }) => {
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

      <li className='item'>
        <Card>
          <div className='image'>
            <img src={logo} alt={name} />
          </div>
          <div className='content'>
            <h3>{name}</h3>
          </div>
          <div className='actions'>
            <button onClick={toggleFavoriteStatus}>{TeamIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
          </div>
        </Card>
      </li>
    </>
  )
}

export default TeamItem