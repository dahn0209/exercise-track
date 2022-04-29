import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Stylednavbar} from './navbar.styled'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Stylednavbar>
    <h1>Exercise Track</h1>
    <nav>
      {isLoggedIn ? (
        <ul>
          {/* The navbar will show these links after you log in */}
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            {' '}
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          {/* The navbar will show these links before you log in */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
    {/* <hr /> */}
  </Stylednavbar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
