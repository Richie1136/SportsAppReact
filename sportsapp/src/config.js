// const API_URL = "https://mlb-data.p.rapidapi.com/json/"
const API_KEY = process.env.REACT_API_KEY
const baseURL = 'http://lookup-service-prod.mlb.com/'

export const Get40manRoster = `${baseURL}json/named.roster_40.bam?team_id=121`
console.log(Get40manRoster)

