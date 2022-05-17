import React from 'react'
import {deletePlanThunk} from '../store/plans'
import {connect} from 'react-redux'
import {fetchSinglePlan} from '../store/plan'
import {Link} from 'react-router-dom'
import {StyledPlanListCard, StyledButton} from './Plans.styled'
import EditPlan from './EditPlan'

const defaultState = {
  edit: false
}

class SinglePlan extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }
  componentDidMount() {
    const propId = this.props.id
    console.log('props in Mount=>', this.props)
    console.log('look at propId=>', propId)
    this.props.fetchSinglePlan(propId)
  }

  render() {
    const {id, name, description} = this.props.plan
    console.log('this.props=>', this.props)
    const plan = this.props.plan
    console.log('plan in render=>', plan)
    if (this.state.edit === true) {
      return <EditPlan key={id} id={id} />
    } else {
      return (
        <StyledPlanListCard className="all-plan-list">
          {/*find a way to to use tenary logic to switch when clicking edit   */}
          <Link to={`/plans/${id}`} className="plan-box">
            <h2>{name}</h2>
          </Link>
          <p className="plan-box">{description}</p>
          <StyledButton className="plan-box">
            {/* <Link to={`/plans/${plan.id}/edit`} className="button-class"> */}
            <div className="button-class">
              <button
                type="button"
                id="button-edit"
                onClick={() => {
                  if (id) {
                    this.setState({
                      edit: true
                    })
                  }
                }}
              >
                Edit
              </button>
            </div>
            {/* </Link> */}

            <div className="button-class">
              <button
                type="button"
                onClick={() => this.props.deletePlanThunk(plan)}
                id="submit-button"
              >
                Remove
              </button>
            </div>
          </StyledButton>
        </StyledPlanListCard>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    plan: state.singlePlanReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlanThunk: planId => dispatch(deletePlanThunk(planId)),
    fetchSinglePlan: planId => dispatch(fetchSinglePlan(planId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlan)
