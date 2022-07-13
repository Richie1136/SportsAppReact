import Team from './components/Team/Team'
import Player from './components/Player/Player';
import League from './components/League/League'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'
import teamData from './teams.json'
import AllRoutes from './components/routes/Routes';
import { useState } from 'react'

const App = () => {
  const [team, setTeam] = useState(teamData)


  return (
    <div className='app'>
      <AllRoutes />
      {/* <Home /> */}
      <League team={team} />
      {/* <Team team={team} /> */}
      <Player />
    </div>
  );
}

export default App;
