import { Routes, Route } from 'react-router-dom'
import { League, Navigation, TeamDetails, PlayerDetails, Standings, Team, Login } from '../index'

const AllRoutes = () => (
  <>
    <Navigation />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<League />} />
      <Route path='/team' element={<Team />} />
      <Route path='/:Team' element={<TeamDetails />} />
      <Route path='/standings/:year' element={<Standings />} />
      <Route path='/player/:player_id' element={<PlayerDetails />} />
    </Routes>
  </>
)

export default AllRoutes