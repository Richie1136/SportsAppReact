import React from 'react'
import { useState, useEffect } from 'react'
import { baseurlPlayer, APIKEY } from '../../api/Api'

const Standings = () => {

  const [standings, setStandings] = useState()
  const [toggle, setToggle] = useState(false)

  const triggleToggle = () => {
    setToggle(!toggle)
  }


  let results = `${baseurlPlayer}/Standings/2022?key=${APIKEY}`
  // console.log(results)



  useEffect(() => {
    const getStandings = async () => {
      try {
        const response = await fetch(results)
        const data = await response.json()
        console.log(data)
        setStandings(data)
      } catch (error) {
        console.log(error)
      }
    }
    getStandings()
  }, [])

  console.log(standings)

  let AL = standings?.filter((status) => status.Division).filter((league) => league.League === 'AL')
  let NL = standings?.filter((status) => status.Division).filter((league) => league.League === 'NL')

  console.log(AL)

  console.log(NL)

  let result = toggle ? NL : AL


  return (
    <>
      <table style={{ 'marginTop': '15px', 'position': 'relative', 'float': 'left', 'marginLeft': '20px' }}>
        {AL?.map(({ Wins, Losses, Name, Percentage, Division, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, Streak, RunsScored, RunsAgainst }) => (
          <>
            <tbody>
              <tr>
                <th>{Division}</th>
                <th>W</th>
                <th>L</th>
                <th>PCT</th>
                <th>GB</th>
                <th>WCGB</th>
                <th>L10</th>
                <th>STRK</th>
                <th>RS</th>
                <th>RA</th>
                <th>DIFF</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td style={{ 'textAlign': 'center' }}>{Name}</td>
                <td>{Wins}</td>
                <td>{Losses}</td>
                <td>{"." + Percentage.toFixed(3).split(".")[1]}</td>
                <td style={{ 'textAlign': 'center' }}>{GamesBehind === 0 ? '-' : GamesBehind}</td>
                <td style={{ 'textAlign': 'right' }}>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}</td>
                <td>{LastTenGamesWins}-{LastTenGamesLosses}</td>
                <td>{Streak}</td>
                <td>{RunsScored}</td>
                <td>{RunsAgainst}</td>
                <td>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}</td>
              </tr>
            </tbody>
          </>
        ))
        }
      </table>
      <table style={{ 'float': 'right', 'position': 'relative', 'marginTop': '15px', 'marginRight': '70px' }}>
        {NL?.map(({ Wins, Losses, Name, Percentage, Division, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, Streak, RunsScored, RunsAgainst }) => (
          <>
            <tbody>
              <tr>
                <th>{Division}</th>
                <th>W</th>
                <th>L</th>
                <th>PCT</th>
                <th>GB</th>
                <th>WCGB</th>
                <th>L10</th>
                <th>STRK</th>
                <th>RS</th>
                <th>RA</th>
                <th>DIFF</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td style={{ 'textAlign': 'center' }}>{Name}</td>
                <td>{Wins}</td>
                <td>{Losses}</td>
                <td>{"." + Percentage.toFixed(3).split(".")[1]}</td>
                <td style={{ 'textAlign': 'center' }}>{GamesBehind === 0 ? '-' : GamesBehind}</td>
                <td style={{ 'textAlign': 'right' }}>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}</td>
                <td>{LastTenGamesWins}-{LastTenGamesLosses}</td>
                <td>{Streak}</td>
                <td>{RunsScored}</td>
                <td>{RunsAgainst}</td>
                <td>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}</td>
              </tr>
            </tbody>
          </>
        ))
        }
      </table>
    </>
  )
}

export default Standings



// https://api.sportsdata.io/v3/mlb/scores/json/Standings/2022