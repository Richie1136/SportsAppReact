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

  const handleRemoveFavorite = (id) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(team => team.id !== id)
    })
  }

  const TeamIsFavorite = (id) => {
    return userFavorites.some(team => team.id === id)
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