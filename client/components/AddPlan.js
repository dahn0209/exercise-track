import React from 'React'
import {createNewPlan} from '../store/plans'
import {connect} from 'react-redux'
import {
  StyledSection,
  StyledForm,
  StyledInput,
  StyledButton
} from './AddPlan.styled'

const defaultState = {
  name: '',
  description: ''
}

class AddNewPlan extends React.Component {
  constructor() {
    super()
    this.state = defaultState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createNewPlan({...this.state})
    this.setState(defaultState)
  }

  render() {
    const {name, description} = this.state
    return (
      <StyledSection>
        <h1>New Plan Details</h1>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            className="new-input"
            type="text"
            name="name"
            value={name}
            placeholder="Plan Name"
            onChange={this.handleChange}
            required
          />
          {/* <label htmlFor="name">Plan Name</label> */}

          <StyledInput
            className="new-input"
            type="text"
            name="description"
            value={description}
            placeholder="Plan Description"
            onChange={this.handleChange}
            required
          />
          {/* <label htmlFor="description">Plan Description</label> */}

          <StyledButton type="submit" className="new-input">
            Add Plan
          </StyledButton>
        </StyledForm>
      </StyledSection>
    )
  }
}

const mapState = state => {
  return {
    newPlan: state.plans
  }
}

const mapDispatch = dispatch => {
  return {
    createNewPlan: plan => dispatch(createNewPlan(plan))
  }
}

export default connect(mapState, mapDispatch)(AddNewPlan)
