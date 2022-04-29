import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'
import {Stylednavbar, StylednavLinks} from './navbar.styled'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Stylednavbar>
    <h1>Exercise Track</h1>
    <nav>
      {isLoggedIn ? (
        <StylednavLinks>
          {/* The navbar will show these links after you log in */}
          <li>
            <NavLink to="/home" activeClassName="link">
              Home
            </NavLink>
          </li>
          <li>
            {' '}
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </li>
        </StylednavLinks>
      ) : (
        <StylednavLinks>
          {/* The navbar will show these links before you log in */}
          <li>
            <NavLink to="/login" activeClassName="link">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName="link">
              Sign Up
            </NavLink>
          </li>
        </StylednavLinks>
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
