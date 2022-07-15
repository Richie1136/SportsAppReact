// import React from 'react'

// const Player = () => {
//   <h2>Apples</h2>
//   return (
//     <h1>Apple</h1>
//   )
//   // return (
//   //   fetch("https://mlb-data.p.rapidapi.com/json/named.player_teams.bam?player_id='493316'&season='2014'", {
//   //     "method": "GET",
//   //     "headers": {
//   //       "x-rapidapi-host": "mlb-data.p.rapidapi.com",
//   //       "x-rapidapi-key": "655bdaa00dmsh1dfed893f79b687p102403jsn162126e9f66e"
//   //     }
//   //   })
//   //     .then(response => {
//   //       console.log(response);
//   //     })
//   //     .catch(err => {
//   //       console.error(err);
//   //     })
//   // )
// }

// export default Player



import { useState, useEffect } from 'react'
import { getPlayerDetails, baseurlPlayer, APIKEY } from '../api/Api'

const PlayerDetails = () => {

  let result = `${baseurlPlayer}/Players?key=${APIKEY}`

  const [getdetails, setDetails] = useState()

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const response = await fetch(result)
        let data = await response.json()
        let playerInfo = data?.map((item) => item)
        console.log(playerInfo)
        setDetails(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPlayerDetails()
  }, [])

  let active = getdetails?.filter((status) => status.Status === 'Active').map((team) => team.Team)
  // let team = getdetails?.map((team) => team.Team)
  // setDetails(active)

  console.log(active)


  return (
    <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
      {getdetails?.map(({ PhotoUrl, PlayerID, active, FirstName, LastName }) => (
        <>
          <img src={PhotoUrl} />
          <h4>{FirstName} {LastName}</h4>
          {PlayerID}
          {active}
        </>
      ))}
    </div>
  )
}

export default PlayerDetails