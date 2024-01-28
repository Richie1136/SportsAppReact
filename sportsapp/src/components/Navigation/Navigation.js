import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import './Navigation.css'
import { useStateValue } from '../../store/state-context'

const Navigation = () => {

  const [{ user }, dispatch] = useStateValue()

  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <nav className='nav'>
      <NavLink to='/'>
        <span>League</span>
      </NavLink>
      <NavLink to='/team'>
        <span>Team</span>
      </NavLink>
      <NavLink to='/standings/:'>
        <span>Standings</span>
      </NavLink>
      <NavLink to={!user && '/login'}>
        <div onClick={handleAuth} className='nav-option'>
          <span className='nav-option-lineone'>Hello {user ? user.email : 'Guest'}</span>
          <span className='nav-option-linetwo'>{user ? 'Sign out' : 'Sign in'}</span>
        </div>
      </NavLink>
    </nav>
  )
}

export default Navigation