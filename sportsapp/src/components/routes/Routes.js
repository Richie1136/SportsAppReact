import Team from '../Team/Team'
import { Routes, Route } from 'react-router-dom'
import League from '../League/League';
import Navigation from '../Navigation/Navigation'
import TeamDetails from '../teamdetails/TeamDetails';
import PlayerDetails from '../playerdetails/PlayerDetails'
import Standings from '../standings/Standings';
import Login from '../login/Login';
import Favorites from '../favorites/Favorites';

const AllRoutes = () => (
  <>
    <Navigation />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<League />} />
      <Route path='/team' element={<Team />} />
      <Route path='/:Team' element={<TeamDetails />} />
      <Route path='/standings' element={<Standings />} />
      <Route path='/player/:player_id' element={<PlayerDetails />} />
      {/* <Route path='/favorites' element={<Favorites />} /> */}
    </Routes>
  </>
)

export default AllRoutes