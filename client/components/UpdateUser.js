import React from 'react'
import {fetchUpdateUser} from '../store/users'
import {connect} from 'react-redux'
import {
  StyledWrapper,
  TitleDiv,
  FormStyled,
  EachLabelDiv,
  PassDiv,
  ButtonStyled,
  SignupLinkDiv
} from './auth-form.styled'

export class UpdateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (this.props.user.id) {
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        address: this.props.user.address,
        email: this.props.user.email,
        password: this.props.user.password
      })
    }
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.user.id && this.props.user.id) {
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        address: this.props.user.address,
        email: this.props.user.email,
        password: this.props.user.password
      })
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  async handleSubmit() {
    await this.props.fetchUpdateUser({
      ...this.props.user,
      ...this.state
    })
  }
  render() {
    return (
      <StyledWrapper>
        <TitleDiv>Update Profile</TitleDiv>

        <FormStyled onSubmit={this.handleSubmit}>
          <EachLabelDiv>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <label htmlFor="firstName">First Name</label>
          </EachLabelDiv>

          <EachLabelDiv>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
          </EachLabelDiv>

          <EachLabelDiv>
            {' '}
            <input type="text" name="address" onChange={this.handleChange} />
            <label htmlFor="address">Address</label>
          </EachLabelDiv>

          <EachLabelDiv>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
          </EachLabelDiv>

          <EachLabelDiv>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
          </EachLabelDiv>

          <ButtonStyled type="submit" value="Submit">
            Submit
          </ButtonStyled>
        </FormStyled>
      </StyledWrapper>
    )
  }
}
const mapState = state => {
  return {user: state.user}
}
const mapDispatch = dispatch => {
  return {
    fetchUpdateUser: state => {
      return dispatch(fetchUpdateUser(state))
    }
  }
}

export default connect(mapState, mapDispatch)(UpdateUser)
