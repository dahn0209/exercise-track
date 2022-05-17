import React from 'react'
import {updatePlanThunk} from '../store/plans'
import {connect} from 'react-redux'
import {fetchSinglePlan} from '../store/plan'
import {Link, useNavigate} from 'react-router-dom'
// import {Route, Link} from 'react-router-dom'

class EditPlan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.planName,
      description: this.props.planDescription,
      edit: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    // const propId=this.props.id
    console.log('props in Mount=>', this.props)
    // const planId = this.props.match.params.planId
    // console.log('look at planId=>', planId)
    // this.props.fetchSinglePlan(planId)
    const {name, description} = this.props.updatedPlan
    console.log('name in UpdatedPlan=Mount>', name)
    console.log('description UpdatedPlan Mount', description)
    if (this.props.id) {
      this.setState({
        name: name,
        description: description
      })
    }
  }

  componentDidUpdate(prevProps) {
    console.log('previous Prop=>', prevProps)
    const {name, description, id} = this.props.updatedPlan
    console.log('name Update=>', name)
    console.log('des Update=>', description)
    console.log('id update=>', id)
    if (prevProps.updatedPlan.id !== id) {
      this.setState({
        name,
        description
      })
    }
  }

  handleChange(event) {
    console.log('look at event=>', event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log('event Handle=>', event)
    event.preventDefault()
    this.props.updatePlanThunk({
      ...this.props.updatedPlan,
      ...this.state
    })
  }

  render() {
    const {name, description} = this.state
    console.log('this.state Render=>', this.state)
    console.log('this.props Render=>', this.props)

    return (
      <div>
        <div className="form">
          <form id="add-plan-form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Plan Name"
              onChange={this.handleChange}
            />

            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              value={description}
              placeholder="Plan Description"
              onChange={this.handleChange}
            />

            <button type="submit" className="submit-button">
              Save Plan
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state to Props=>', state)
  return {
    updatedPlan: state.singlePlanReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchSinglePlan: planId => dispatch(fetchSinglePlan(planId)),
    updatePlanThunk: plan => dispatch(updatePlanThunk(plan))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlan)
