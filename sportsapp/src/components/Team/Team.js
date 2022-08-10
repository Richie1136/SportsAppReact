import Card from '../card/Card'
import teamData from '../../teams.json'
import './Team.css'
import { useContext, useState } from 'react'
import FavoritesContext from '../../store/FavoritesContext'
import TeamItem from '../teamitem/TeamItem'

const Team = () => {

  const { name_display_full, logo, team_id, Team } = teamData

  const context = useContext(FavoritesContext)
  const TeamIsFavorite = context.isTeamFavorite(team_id)
  const toggleFavoriteStatus = () => {
    if (TeamIsFavorite) {
      context.removeFavorite(team_id)
    } else {
      context.addFavorite({
        name_display_full, logo, team_id
      })
    }
  }
  return (
    // <div className='container'>
    //   {teamData?.queryResults?.row.map(({ name_display_full, logo, team_id, Team }) => (
    //     <Card key={name_display_full}>
    //       <div className='team-info'>
    //         {team_id ? <h2><a href={`/${Team}`}>{name_display_full}</a></h2> : <h2>{name_display_full}</h2>}
    //         <img src={logo} alt='Team Logo' />
    //       </div>
    //       <button onClick={toggleFavoriteStatus}>{TeamIsFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
    //     </Card>
    //   ))
    //   }
    // </div>
    <div className='container'>
      {teamData?.queryResults?.row.map(({ name_display_full, logo, team_id, Team }) => {
        return <TeamItem key={name_display_full} id={team_id} name={name_display_full} logo={logo} />
      })}
    </div>
  )
}

export default Team