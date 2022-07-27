import './Row.css'

const Row = ({ Name, GamesBehind, Wins, Losses, Percentage, RunsScored, RunsAgainst, WildCardGamesBehind, LastTenGamesWins, LastTenGamesLosses, Streak, HomeWins, HomeLosses, AwayWins, AwayLosses }) => (
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
      <td className='teamData'>
        <span className='numofLosses'>{Losses}</span>
      </td>
      <td className='teampercent'>
        <span className='percentage'>{"." + Percentage.toFixed(3).split(".")[1]}</span>
      </td>
      <td className='teamData'>
        <span className='gbh'>{GamesBehind === 0 ? '-' : GamesBehind}</span>
      </td>
      <td className='games'>
        <span className='wcgbh'>{WildCardGamesBehind === 0 ? '-' : WildCardGamesBehind > 0 ? WildCardGamesBehind : "+" + Math.abs(WildCardGamesBehind.toString())}
        </span>
      </td>
      <td className='teamData'>
        <span className='lasttenrecord'>{LastTenGamesWins}-{LastTenGamesLosses}</span>
      </td>
      <td className='TS'>
        <span className='ts'>{Streak}</span>
      </td>
      <td className='teamData'>
        <span className='team-Scored-Allowed'>{RunsScored}</span>
      </td>
      <td className='teamData'>
        <span className='team-Scored-Allowed'>{RunsAgainst}</span>
      </td>
      <td className='rundiff'>
        <span className='teamrundiff'>
          <span className={`${RunsScored - RunsAgainst > 0 ? 'Positive' : 'Negative'}`}>{RunsScored - RunsAgainst > 0 ? "+" + (RunsScored - RunsAgainst) : RunsScored - RunsAgainst}
          </span>
        </span>
      </td>
      <td className='team-home-away'>
        <span className='team-record'>{HomeWins}-{HomeLosses}</span>
      </td>
      <td className='team-home-away'>
        <span className='team-record'>{AwayWins}-{AwayLosses}</span>
      </td>
    </tr>
  </tbody>
)

export default Row