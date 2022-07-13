import Team from './components/Team/Team'
import Player from './components/Player/Player';
import League from './components/League/League'
import Navigation from './components/Navigation/Navigation'
import teamData from './teams.json'
import AllRoutes from './components/routes/Routes';
import { useState } from 'react'
import Home from './components/Home/Home';

const App = () => {
  const [team, setTeam] = useState(teamData)


  return (
    <div className='app'>
      <AllRoutes />
      {/* <Home /> */}
      {/* <Home /> */}
      {/* <Team team={team} /> */}
      {/* <League team={team} /> */}
      {/* <Player /> */}
    </div>
  );
}

export default App;
