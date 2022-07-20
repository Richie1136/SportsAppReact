import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='nav'>
      <nav>
        <NavLink to='/'>
          <span>Home</span>
        </NavLink>
        <NavLink to='/team'>
          <span>Team</span>
        </NavLink>
        <NavLink to='/player'>
          <span>Player</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navigation
