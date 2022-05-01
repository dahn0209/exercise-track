import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'
import {Stylednavbar, ContainerNavBar, StyledNav} from './navbar.styled'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Stylednavbar>
    <ContainerNavBar>
      <NavLink to="/" activeClassName="title">
        <h1>Exercise-Track</h1>
      </NavLink>

      <StyledNav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <NavLink to="/home" activeClassName="link">
              Home
            </NavLink>{' '}
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}

            <NavLink to="/login" activeClassName="land-link">
              <h3>Login</h3>
            </NavLink>

            <NavLink to="/signup" activeClassName="land-link">
              <h3>Sign Up</h3>
            </NavLink>
          </div>
        )}
      </StyledNav>
    </ContainerNavBar>

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
