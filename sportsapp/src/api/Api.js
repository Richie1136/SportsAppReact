import {
  API_URL
} from '../config'
// API USED

// https://appac.github.io/mlb-data-api-docs/#player-data-player-teams-get

// import teamData from './teams.json'


export const baseURL = 'http://lookup-service-prod.mlb.com'

const defaultConfig = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "mlb-data.p.rapidapi.com",
    "x-rapidapi-key": "655bdaa00dmsh1dfed893f79b687p102403jsn162126e9f66e"
  }
}

export const fetchTeams = async (team_id) => {
  try {
    const response = await fetch(`${baseURL}/json/named.roster_40.bam?${team_id}`)
    console.log(response)
    const data = response.json()
    console.log(response)
    // return data
  } catch (error) {
    console.log(error)
  }
}

    // fetchPlayer: async (player_id) => {
    //   const endpoint = `"https://mlb-data.p.rapidapi.com/json/named.player_info.bam?sport_code='mlb'&${player_id}"`;
    //   return await (await fetch(endpoint)).json();
    // }

  //http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=%27121%27


