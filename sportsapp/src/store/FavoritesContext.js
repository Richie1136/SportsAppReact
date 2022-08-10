import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteTeam) => { },
  removeFavorite: (teamId) => { },
  isTeamFavorite: (teamId) => { }
})

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([])

  const handleAddFavorite = (favoriteTeam) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.concat(favoriteTeam)
    })
  }

  const handleRemoveFavorite = (team_id) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(team => team.id !== team_id)
    })
  }

  const TeamIsFavorite = (team_id) => {
    return userFavorites.some(team => team.id === team_id)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isTeamFavorite: TeamIsFavorite
  }
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext