import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Switch from '../../widgets/ToggleSwitch'

const NavBar = ({ toggle, handleClick }) => {
  return (
    <div className='header-container'>
      <div className='branding'>
        <Link to='/'>
          <img src='/images/logo.png' alt='logo' />
        </Link>
      </div>
      <nav>
        <Switch isOn={toggle} handleToggle={handleClick} />
        <NavLink exact to='/' className='nav-link' activeClassName='selected'>
          <button>Home</button>
        </NavLink>
        <NavLink
          exact
          to='/favorites'
          className='nav-link'
          activeClassName='selected'
        >
          <button>Favorites</button>
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
