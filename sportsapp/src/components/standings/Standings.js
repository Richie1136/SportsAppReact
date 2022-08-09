import { useState, useEffect } from 'react'
import { baseurlPlayer } from '../../api/Api'
import './Standings.css'
import Row from '../row/Row'

const APIKEY = process.env.REACT_APP_API_KEY

const Standings = () => {

  const [standings, setStandings] = useState()

  let results = `${baseurlPlayer}/Standings/2022?key=${APIKEY}`

  useEffect(() => {
    const getStandings = async () => {
      try {
        const response = await fetch(results)
        const data = await response.json()
        setStandings(data)
      } catch (error) {
        console.log(error)
      }
    }
    getStandings()
  }, [])

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
          <span className='header-percentage'>PCT</span>
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
        <span className='tstreak'>
          <span className='teamStreak'>STRK</span>
        </span>
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
      <table>
        <colgroup className='col1' span='6'></colgroup>
        <colgroup className='col2' span='2'></colgroup>
        <colgroup className='col3' span='4'></colgroup>
        <colgroup className='col4' span='3'></colgroup>
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
          <Row key={Name} Name={Name} GamesBehind={GamesBehind} Wins={Wins} Losses={Losses} Percentage={Percentage} RunsScored={RunsScored} RunsAgainst={RunsAgainst} WildCardGamesBehind={WildCardGamesBehind} LastTenGamesWins={LastTenGamesWins} LastTenGamesLosses={LastTenGamesLosses} Streak={Streak} HomeWins={HomeWins} HomeLosses={HomeLosses} AwayWins={AwayWins} AwayLosses={AwayLosses} />
        ))}
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
          <Row key={Name} Name={Name} GamesBehind={GamesBehind} Wins={Wins} Losses={Losses} Percentage={Percentage} RunsScored={RunsScored} RunsAgainst={RunsAgainst} WildCardGamesBehind={WildCardGamesBehind} LastTenGamesWins={LastTenGamesWins} LastTenGamesLosses={LastTenGamesLosses} Streak={Streak} HomeWins={HomeWins} HomeLosses={HomeLosses} AwayWins={AwayWins} AwayLosses={AwayLosses} />
        ))}
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
          <Row key={Name} Name={Name} GamesBehind={GamesBehind} Wins={Wins} Losses={Losses} Percentage={Percentage} RunsScored={RunsScored} RunsAgainst={RunsAgainst} WildCardGamesBehind={WildCardGamesBehind} LastTenGamesWins={LastTenGamesWins} LastTenGamesLosses={LastTenGamesLosses} Streak={Streak} HomeWins={HomeWins} HomeLosses={HomeLosses} AwayWins={AwayWins} AwayLosses={AwayLosses} />
        ))}
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
          <Row key={Name} Name={Name} GamesBehind={GamesBehind} Wins={Wins} Losses={Losses} Percentage={Percentage} RunsScored={RunsScored} RunsAgainst={RunsAgainst} WildCardGamesBehind={WildCardGamesBehind} LastTenGamesWins={LastTenGamesWins} LastTenGamesLosses={LastTenGamesLosses} Streak={Streak} HomeWins={HomeWins} HomeLosses={HomeLosses} AwayWins={AwayWins} AwayLosses={AwayLosses} />
        ))}
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
          <Row key={Name} Name={Name} GamesBehind={GamesBehind} Wins={Wins} Losses={Losses} Percentage={Percentage} RunsScored={RunsScored} RunsAgainst={RunsAgainst} WildCardGamesBehind={WildCardGamesBehind} LastTenGamesWins={LastTenGamesWins} LastTenGamesLosses={LastTenGamesLosses} Streak={Streak} HomeWins={HomeWins} HomeLosses={HomeLosses} AwayWins={AwayWins} AwayLosses={AwayLosses} />
        ))}
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
          <Row key={Name} Name={Name} GamesBehind={GamesBehind} Wins={Wins} Losses={Losses} Percentage={Percentage} RunsScored={RunsScored} RunsAgainst={RunsAgainst} WildCardGamesBehind={WildCardGamesBehind} LastTenGamesWins={LastTenGamesWins} LastTenGamesLosses={LastTenGamesLosses} Streak={Streak} HomeWins={HomeWins} HomeLosses={HomeLosses} AwayWins={AwayWins} AwayLosses={AwayLosses} />
        ))}
      </table>
    </>
  )
}

export default Standings