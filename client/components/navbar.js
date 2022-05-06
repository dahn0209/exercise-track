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
            <NavLink to="/home" activeClassName="landlink">
              <h3>Home</h3>
            </NavLink>{' '}
            <NavLink to="/update-profile" activeClassName="landlink">
              <h3>Update Profile</h3>
            </NavLink>{' '}
            <a href="#" onClick={handleClick} activeClassName="landlink">
              <h3>Logout</h3>
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <NavLink to="/login" activeClassName="landlink">
              <h3>Login</h3>
            </NavLink>

            <NavLink to="/signup" activeClassName="landlink">
              <h3>Sign Up</h3>
            </NavLink>
          </div>
        )}
      </StyledNav>
    </ContainerNavBar>

    <hr />
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
