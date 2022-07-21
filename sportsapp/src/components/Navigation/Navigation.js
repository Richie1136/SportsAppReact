import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='nav'>
      <NavLink to='/'>
        <span>Home</span>
      </NavLink>
      <div className='nav-center'>
        <NavLink to='/team'>
          <span>Team</span>
        </NavLink>
      </div>
      <div className='nav-right'>
        <NavLink to='/player'>
          <span>Player</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation
