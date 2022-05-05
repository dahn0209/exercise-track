import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {
  StyledWrapper,
  TitleDiv,
  FormStyled,
  EachLabelDiv,
  PassDiv,
  ButtonStyled,
  SignupLinkDiv
} from './auth-form.styled'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  if (displayName === 'Login') {
    return (
      <StyledWrapper>
        <TitleDiv>{displayName}</TitleDiv>
        <FormStyled onSubmit={handleSubmit} name={name}>
          <EachLabelDiv>
            <input name="email" type="text" required />
            <span />
            <label htmlFor="email">Email</label>
          </EachLabelDiv>

          <EachLabelDiv>
            <input name="password" type="password" required />
            <span />
            <label htmlFor="password">Password</label>
          </EachLabelDiv>
          {/* <PassDiv>Forgot Password?</PassDiv> */}
          <ButtonStyled type="submit" className={displayName}>
            {displayName}
          </ButtonStyled>

          <SignupLinkDiv>
            Not a member?
            <Link to="/signup" className="sign-up">
              Sign Up
            </Link>
          </SignupLinkDiv>

          {error && error.response && <div> {error.response.data} </div>}
        </FormStyled>
        {/* <a href="/auth/google">{displayName} with Google</a> */}
      </StyledWrapper>
    )
  }
}
/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
