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

  let headers = (
    <>
      <th className='wins'>
        <span className='divisionspan'>
          <span className='teamw'>W</span>
        </span>
      </th>
      <th className='losses'>
        <span className='team'>
          <span className='teaml'>L</span>
        </span>
      </th>
      <th className='pct'>
        <span className='runs'>
          <span className='percentage'>PCT</span>
        </span>
      </th>
      <th className='gb'>
        <span className='runs'>
          <span className='tgb'>GB</span>
        </span>
      </th>
      <th className='wcgb'>
        <span className='tstreak'>
          <span className='twcgb'>WCGB</span>
        </span>
      </th>
      <th className='last10'>
        <span className='runs'>
          <span className='l10'>L10</span>
        </span>
      </th>
      <th className='streak'>
        <soan className='tstreak'>
          <span className='teamStreak'>STRK</span>
        </soan>
      </th>
      <th className='rs'>
        <span className='runs'>
          <span className='trs'>RS</span>
        </span>
      </th>
      <th className='ra'>
        <span className='runs'>
          <span className='tra'>RA</span>
        </span>
      </th>
      <th className='diff'>
        <span className='runs'>
          <span className='rd'>DIFF</span>
        </span>
      </th>
      <th className='home'>
        <span className='span'>
          <span className='hr'>Home</span>
        </span>
      </th>
      <th className='away'>
        <span className='span'>
          <span className='ar'>Away</span>
        </span>
      </th>
    </>
  )




  return (
    <>
      <table style={{ 'position': 'relative', 'marginTop': '15px' }}>
        <colgroup style={{ 'width': '410px', 'height': '272px' }} span='6'></colgroup>
        <colgroup style={{ 'width': '272px', 'height': '96px' }} span='2'></colgroup>
        <colgroup style={{ 'width': '272px', 'height': '204px' }} span='4'></colgroup>
        <colgroup style={{ 'width': '272px', 'height': '180px' }} span='3'></colgroup>
        <tbody>
          <tr className='division-row'>
            <th className='division-name'>
              <span>
                <span className='division-title'>AL East</span>
              </span>
            </th>
            {headers}
          </tr>
        </tbody>
        {ALE?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
          <tbody>
            <tr style={{ 'width': '990px', 'height': '48px' }}>
              <td className='teamName'>
                <span className='tn'>
                  <span className='teamData'>{Name}</span>
                </span>
              </td>
              <td className='teamWins'>
                <span className='numofwins'>{Wins}</span>
              </td>
              <td className='teamLosses'>
                <span className='numofLosses'>{Losses}</span>
              </td>
              <td className='teampercent'>
                <span className='percentage'>{"." + Percentage.toFixed(3).split(".")[1]}</span>
              </td>
              <td className='gamesbehind'>
                <span className='gbh'>{GamesBehind === 0 ? '-' : GamesBehind}</span>
              </td>
              <td className='wildcardbehind'>
                <span className='wcgbh'>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}
                </span>
              </td>
              <td className='last10record'>
                <span className='lasttenrecord'>{LastTenGamesWins}-{LastTenGamesLosses}</span>
              </td>
              <td className='teamstreak'>
                <span className='ts'>{Streak}</span>
              </td>
              <td className='teamRS'>
                <span className='teamScored'>{RunsScored}</span>
              </td>
              <td className='teamRA'>
                <span className='teamAllowed'>{RunsAgainst}</span>
              </td>
              <td className='rundiff'>
                <span className='teamrundiff'>
                  <span className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}
                  </span>
                </span>
              </td>
              <td className='team-home'>
                <span className='team-home-record'>{HomeWins}-{HomeLosses}</span>
              </td>
              <td className='team-away'>
                <span className='team-away-record'>{AwayWins}-{AwayLosses}</span>
              </td>
            </tr>
          </tbody>
        ))}
        <br />
        <tbody>
          <tr className='division-row'>
            <th className='division-name'>
              <span>
                <span className='division-title'>AL Central</span>
              </span>
            </th>
            {headers}
          </tr>
        </tbody>
        {ALC?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
          <tbody>
            <tr style={{ 'width': '990px', 'height': '48px' }}>
              <td className='teamName'>
                <span className='tn'>
                  <span className='teamData'>{Name}</span>
                </span>
              </td>
              <td className='teamWins'>
                <span className='numofwins'>{Wins}</span>
              </td>
              <td className='teamLosses'>
                <span className='numofLosses'>{Losses}</span>
              </td>
              <td className='teampercent'>
                <span className='percentage'>{"." + Percentage.toFixed(3).split(".")[1]}</span>
              </td>
              <td className='gamesbehind'>
                <span className='gbh'>{GamesBehind === 0 ? '-' : GamesBehind}</span>
              </td>
              <td className='wildcardbehind'>
                <span className='wcgbh'>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}
                </span>
              </td>
              <td className='last10record'>
                <span className='lasttenrecord'>{LastTenGamesWins}-{LastTenGamesLosses}</span>
              </td>
              <td className='teamstreak'>
                <span className='ts'>{Streak}</span>
              </td>
              <td className='teamRS'>
                <span className='teamScored'>{RunsScored}</span>
              </td>
              <td className='teamRA'>
                <span className='teamAllowed'>{RunsAgainst}</span>
              </td>
              <td className='rundiff'>
                <span className='teamrundiff'>
                  <span className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}
                  </span>
                </span>
              </td>
              <td className='team-home'>
                <span className='team-home-record'>{HomeWins}-{HomeLosses}</span>
              </td>
              <td className='team-away'>
                <span className='team-away-record'>{AwayWins}-{AwayLosses}</span>
              </td>
            </tr>
          </tbody>
        ))}
        <br />
        <tbody>
          <tr className='division-row'>
            <th className='division-name'>
              <span>
                <span className='division-title'>AL West</span>
              </span>
            </th>
            {headers}
          </tr>
        </tbody>
        {ALW?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
          <tbody>
            <tr style={{ 'width': '990px', 'height': '48px' }}>
              <td className='teamName'>
                <span className='tn'>
                  <span className='teamData'>{Name}</span>
                </span>
              </td>
              <td className='teamWins'>
                <span className='numofwins'>{Wins}</span>
              </td>
              <td className='teamLosses'>
                <span className='numofLosses'>{Losses}</span>
              </td>
              <td className='teampercent'>
                <span className='percentage'>{"." + Percentage.toFixed(3).split(".")[1]}</span>
              </td>
              <td className='gamesbehind'>
                <span className='gbh'>{GamesBehind === 0 ? '-' : GamesBehind}</span>
              </td>
              <td className='wildcardbehind'>
                <span className='wcgbh'>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}
                </span>
              </td>
              <td className='last10record'>
                <span className='lasttenrecord'>{LastTenGamesWins}-{LastTenGamesLosses}</span>
              </td>
              <td className='teamstreak'>
                <span className='ts'>{Streak}</span>
              </td>
              <td className='teamRS'>
                <span className='teamScored'>{RunsScored}</span>
              </td>
              <td className='teamRA'>
                <span className='teamAllowed'>{RunsAgainst}</span>
              </td>
              <td className='rundiff'>
                <span className='teamrundiff'>
                  <span className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}
                  </span>
                </span>
              </td>
              <td className='team-home'>
                <span className='team-home-record'>{HomeWins}-{HomeLosses}</span>
              </td>
              <td className='team-away'>
                <span className='team-away-record'>{AwayWins}-{AwayLosses}</span>
              </td>
            </tr>
          </tbody>
        ))}
        <br />
      </table>
      <table style={{ 'position': 'relative', 'marginTop': '15px' }}>
        <colgroup style={{ 'width': '410px', 'height': '272px' }} span='6'></colgroup>
        <colgroup style={{ 'width': '272px', 'height': '96px' }} span='2'></colgroup>
        <colgroup style={{ 'width': '272px', 'height': '204px' }} span='4'></colgroup>
        <colgroup style={{ 'width': '272px', 'height': '180px' }} span='3'></colgroup>
        <tbody>
          <tr className='division-row'>
            <th className='division-name'>
              <span>
                <span className='division-title'>NL East</span>
              </span>
            </th>
            {headers}
          </tr>
        </tbody>
        {NLE?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
          <tbody>
            <tr style={{ 'width': '990px', 'height': '48px' }}>
              <td className='teamName'>
                <span className='tn'>
                  <span className='teamData'>{Name}</span>
                </span>
              </td>
              <td className='teamWins'>
                <span className='numofwins'>{Wins}</span>
              </td>
              <td className='teamLosses'>
                <span className='numofLosses'>{Losses}</span>
              </td>
              <td className='teampercent'>
                <span className='percentage'>{"." + Percentage.toFixed(3).split(".")[1]}</span>
              </td>
              <td className='gamesbehind'>
                <span className='gbh'>{GamesBehind === 0 ? '-' : GamesBehind}</span>
              </td>
              <td className='wildcardbehind'>
                <span className='wcgbh'>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}
                </span>
              </td>
              <td className='last10record'>
                <span className='lasttenrecord'>{LastTenGamesWins}-{LastTenGamesLosses}</span>
              </td>
              <td className='teamstreak'>
                <span className='ts'>{Streak}</span>
              </td>
              <td className='teamRS'>
                <span className='teamScored'>{RunsScored}</span>
              </td>
              <td className='teamRA'>
                <span className='teamAllowed'>{RunsAgainst}</span>
              </td>
              <td className='rundiff'>
                <span className='teamrundiff'>
                  <span className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}
                  </span>
                </span>
              </td>
              <td className='team-home'>
                <span className='team-home-record'>{HomeWins}-{HomeLosses}</span>
              </td>
              <td className='team-away'>
                <span className='team-away-record'>{AwayWins}-{AwayLosses}</span>
              </td>
            </tr>
          </tbody>
        ))}
        <br />
        <tbody>
          <tr className='division-row'>
            <th className='division-name'>
              <span>
                <span className='division-title'>NL Central</span>
              </span>
            </th>
            {headers}
          </tr>
        </tbody>
        {NLC?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
          <tbody>
            <tr style={{ 'width': '990px', 'height': '48px' }}>
              <td className='teamName'>
                <span className='tn'>
                  <span className='teamData'>{Name}</span>
                </span>
              </td>
              <td className='teamWins'>
                <span className='numofwins'>{Wins}</span>
              </td>
              <td className='teamLosses'>
                <span className='numofLosses'>{Losses}</span>
              </td>
              <td className='teampercent'>
                <span className='percentage'>{"." + Percentage.toFixed(3).split(".")[1]}</span>
              </td>
              <td className='gamesbehind'>
                <span className='gbh'>{GamesBehind === 0 ? '-' : GamesBehind}</span>
              </td>
              <td className='wildcardbehind'>
                <span className='wcgbh'>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}
                </span>
              </td>
              <td className='last10record'>
                <span className='lasttenrecord'>{LastTenGamesWins}-{LastTenGamesLosses}</span>
              </td>
              <td className='teamstreak'>
                <span className='ts'>{Streak}</span>
              </td>
              <td className='teamRS'>
                <span className='teamScored'>{RunsScored}</span>
              </td>
              <td className='teamRA'>
                <span className='teamAllowed'>{RunsAgainst}</span>
              </td>
              <td className='rundiff'>
                <span className='teamrundiff'>
                  <span className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}
                  </span>
                </span>
              </td>
              <td className='team-home'>
                <span className='team-home-record'>{HomeWins}-{HomeLosses}</span>
              </td>
              <td className='team-away'>
                <span className='team-away-record'>{AwayWins}-{AwayLosses}</span>
              </td>
            </tr>
          </tbody>
        ))}
        <br />
        <tbody>
          <tr className='division-row'>
            <th className='division-name'>
              <span>
                <span className='division-title'>NL West</span>
              </span>
            </th>
            {headers}
          </tr>
        </tbody>
        {NLW?.map(({ Name, Wins, Losses, Percentage, GamesBehind, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, RunsScored, RunsAgainst, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
          <tbody>
            <tr style={{ 'width': '990px', 'height': '48px' }}>
              <td className='teamName'>
                <span className='tn'>
                  <span className='teamData'>{Name}</span>
                </span>
              </td>
              <td className='teamWins'>
                <span className='numofwins'>{Wins}</span>
              </td>
              <td className='teamLosses'>
                <span className='numofLosses'>{Losses}</span>
              </td>
              <td className='teampercent'>
                <span className='percentage'>{"." + Percentage.toFixed(3).split(".")[1]}</span>
              </td>
              <td className='gamesbehind'>
                <span className='gbh'>{GamesBehind === 0 ? '-' : GamesBehind}</span>
              </td>
              <td className='wildcardbehind'>
                <span className='wcgbh'>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}
                </span>
              </td>
              <td className='last10record'>
                <span className='lasttenrecord'>{LastTenGamesWins}-{LastTenGamesLosses}</span>
              </td>
              <td className='teamstreak'>
                <span className='ts'>{Streak}</span>
              </td>
              <td className='teamRS'>
                <span className='teamScored'>{RunsScored}</span>
              </td>
              <td className='teamRA'>
                <span className='teamAllowed'>{RunsAgainst}</span>
              </td>
              <td className='rundiff'>
                <span className='teamrundiff'>
                  <span className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}
                  </span>
                </span>
              </td>
              <td className='team-home'>
                <span className='team-home-record'>{HomeWins}-{HomeLosses}</span>
              </td>
              <td className='team-away'>
                <span className='team-away-record'>{AwayWins}-{AwayLosses}</span>
              </td>
            </tr>
          </tbody>
        ))}
        <br />
      </table>
    </>
  )
}

export default Standings




// https://api.sportsdata.io/v3/mlb/scores/json/Standings/2022