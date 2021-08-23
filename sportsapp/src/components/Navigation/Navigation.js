import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='nav'>
      <nav>
        <Link to='/'>
          <span className='home'>Home</span>
        </Link>
        <span>|</span>
        <Link to='/league'>
          <span>League</span>
        </Link>
        <span>|</span>
        <Link to='/team'>
          <span>Team</span>
        </Link>
        <span>|</span>
        <Link to='/player'>
          <span>Player</span>
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
