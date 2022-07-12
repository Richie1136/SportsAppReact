import Team from '../Team/Team'
import Player from '../Player/Player';
import { Routes, Route, Navigate } from 'react-router-dom'
import League from '../League/League';
import Header from '../Header/Header'
import Home from '../Home/Home'
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation'

const AllRoutes = () => (
  <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Navigate to="/league" />} />
      <Route path='/league' element={<League />} />
      <Route path='/team' element={<Team />} />
      <Route path='/player' element={<Player />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
)

export default AllRoutes