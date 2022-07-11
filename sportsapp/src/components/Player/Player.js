import React from 'react'

const Player = () => {
  return (
    fetch("https://mlb-data.p.rapidapi.com/json/named.player_teams.bam?player_id='493316'&season='2014'", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "mlb-data.p.rapidapi.com",
        "x-rapidapi-key": "655bdaa00dmsh1dfed893f79b687p102403jsn162126e9f66e"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      })
  )
}

export default Player

