import React from 'React'
import {createNewPlan} from '../store/plans'
import {connect} from 'react-redux'

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>New Plan Details</h1>

          <label htmlFor="name">Plan Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Plan Name"
            onChange={this.handleChange}
            required
          />

          <label htmlFor="description">Plan Description</label>
          <input
            type="text"
            name="description"
            value={description}
            placeholder="Plan Description"
            onChange={this.handleChange}
            required
          />

          <button type="submit">Add New Plan</button>
        </form>
      </div>
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
