import Team from '../Team/Team'
import Player from '../Player/Player';
import { Routes, Route } from 'react-router-dom'
import League from '../League/League';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation'
import TeamDetails from '../teamdetails/TeamDetails';
import PlayerDetails from '../playerdetails/PlayerDetails'
import Standings from '../standings/Standings';

const AllRoutes = () => (
  <>
    <Navigation />
    <Routes>
      <Route path='/' element={<League />} />
      <Route path='/team' element={<Team />} />
      <Route path='/:Team' element={<TeamDetails />} />
      <Route path='/player' element={<Player />} />
      <Route path='/standings' element={<Standings />} />
      <Route path='/player/:player_id' element={<PlayerDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
)

export default AllRoutes