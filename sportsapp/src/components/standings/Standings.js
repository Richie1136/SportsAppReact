import React from 'react'
import { useState, useEffect } from 'react'
import { baseurlPlayer, APIKEY } from '../../api/Api'
import './Standings.css'

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

  let ALE = standings?.filter((status) => status.Division).filter((league) => league.League === 'AL').filter((division) => division.Division === 'East')
  let ALC = standings?.filter((status) => status.Division).filter((league) => league.League === 'AL').filter((division) => division.Division === 'Central')
  let ALW = standings?.filter((status) => status.Division).filter((league) => league.League === 'AL').filter((division) => division.Division === 'West')
  let NLE = standings?.filter((status) => status.Division).filter((league) => league.League === 'NL').filter((division) => division.Division === 'East')
  let NLC = standings?.filter((status) => status.Division).filter((league) => league.League === 'NL').filter((division) => division.Division === 'Central')
  let NLW = standings?.filter((status) => status.Division).filter((league) => league.League === 'NL').filter((division) => division.Division === 'West')


  return (
    <>
      <table style={{ 'marginTop': '15px', 'position': 'relative', 'float': 'left', 'marginLeft': '20px' }}>
        <tbody>
          <th>AL East</th>
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
          <th>Home</th>
          <th>Away</th>
          {ALE?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
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
              <td className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}</td>
              <td>{HomeWins}-{HomeLosses}</td>
              <td>{AwayWins}-{AwayLosses}</td>
            </tr>
          ))}
        </tbody>
        <br />
        <tbody>
          <th>AL Central</th>
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
          <th>Home</th>
          <th>Away</th>
          {ALC?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
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
              <td className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}</td>
              <td>{HomeWins}-{HomeLosses}</td>
              <td>{AwayWins}-{AwayLosses}</td>
            </tr>
          ))}
        </tbody>
        <br />
        <tbody>
          <th>AL West</th>
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
          <th>Home</th>
          <th>Away</th>
          {ALW?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
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
              <td className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}</td>
              <td>{HomeWins}-{HomeLosses}</td>
              <td>{AwayWins}-{AwayLosses}</td>
            </tr>
          ))}
        </tbody>
        <br />
      </table>
      <table style={{ 'float': 'right', 'position': 'relative', 'marginTop': '15px', 'marginRight': '70px' }}>
        <tbody style={{ 'marginLeft': '20px' }}>
          <tr>
            <th>NL East</th>
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
            <th>Home</th>
            <th>Away</th>
          </tr>
        </tbody>
        {NLE?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
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
            <td className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}</td>
            <td>{HomeWins}-{HomeLosses}</td>
            <td>{AwayWins}-{AwayLosses}</td>
          </tr>
        ))}
        <br />
        <tbody style={{ 'marginLeft': '20px' }}>
          <tr>
            <th>NL Central</th>
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
            <th>Home</th>
            <th>Away</th>
          </tr>
        </tbody>
        {NLC?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
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
            <td className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}</td>
            <td>{HomeWins}-{HomeLosses}</td>
            <td>{AwayWins}-{AwayLosses}</td>
          </tr>
        ))}
        <br />
        <tbody style={{ 'marginLeft': '20px' }}>
          <tr>
            <th>NL West</th>
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
            <th>Home</th>
            <th>Away</th>
          </tr>
        </tbody>
        {NLW?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
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
            <td className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}</td>
            <td>{HomeWins}-{HomeLosses}</td>
            <td>{AwayWins}-{AwayLosses}</td>
          </tr>
        ))}
        <br />
      </table>
    </>
  )
}

export default Standings




// https://api.sportsdata.io/v3/mlb/scores/json/Standings/2022