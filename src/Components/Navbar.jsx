import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from './utils/globalContext'
import { routes } from './utils/routes'

const Navbar = () => {
  const { state, dispatch } = useDentistStates();
  const isDarkTheme = state.theme;

  
  return (
    <nav className="navbar">

    <div className="navbar-left">
      <h2 style={{ color: 'red' }}>D</h2>
      <h2>H<a href={routes.home}>Odonto</a></h2>
    </div>

    <div className="navbar-right">
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contacto</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
        {isDarkTheme ? '☀️' : '🌙'}
      </button>
    </div>
    
  </nav>
)}

export default Navbar
