import {
  API_URL
} from '../config'

const defaultConfig = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "mlb-data.p.rapidapi.com",
    "x-rapidapi-key": "655bdaa00dmsh1dfed893f79b687p102403jsn162"
  }
}

// const apiSettings = {
//   fetchTeams: async (team_id) => {
//     const endpoint = `"https://mlb-data.p.rapidapi.com/json/named.roster_40.bam?${team_id}"`;
//     return await (await fetch(endpoint)).json(;)
//   },

//   fetchPlayer: async (player_id) => {
//     const endpoint = `"https://mlb-data.p.rapidapi.com/json/named.player_info.bam?sport_code='mlb'&${player_id}"`;
//     return await (await fetch(endpoint)).json();
//   }