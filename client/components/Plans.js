import React from 'react'
import {fetchPlans, deletePlanThunk, updatePlanThunk} from '../store/plans'
import {fetchSinglePlan} from '../store/plan'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AddNewPlan from './AddPlan'
import {
  MainStyled,
  HeaderStyled,
  StyledListHeader,
  StyledPlanListCard,
  StyledButton
} from './Plans.styled'

// const defaultState = {
//   name: '',
//   description: ''
// }

export class AllPlans extends React.Component {
  //  constructor() {
  //   super()
  //   this.state = defaultState

  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }
  componentDidMount() {
    this.props.fetchPlans()
    const planId = this.props.match.params.planId
    console.log('look at planId=>', planId)
    // this.props.fetchSinglePlan(planId)
    // console.log('mount=>', this.props.fetchSinglePlan(planId))
    // console.log('updatedPlans prop=>', this.props.updatedPlan)
    // const {name, description} = this.props.updatedPlan
    // if (planId) {
    //   this.setState({
    //     name: name,
    //     description: description
    //   })
    // }
  }

  // componentDidUpdate(prevProps) {
  //   const {name, description, id} = this.props.updatedPlan
  //   if (prevProps.updatedPlan.id !== id) {
  //     this.setState({
  //       name,
  //       description
  //     })
  //   }
  // }

  //  handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // handleSubmit(event) {
  //   event.preventDefault()
  //   this.props.updatePlanThunk({
  //     ...this.props.updatedPlan,
  //     ...this.state
  //   })
  // }

  render() {
    console.log('state=>', this.state)
    const plans = this.props.plans
    console.log('plans', plans)
    console.log('props=>', this.props)
    return (
      <MainStyled>
        <HeaderStyled className="flex-item">
          <h1>All Plans</h1>
        </HeaderStyled>
        <AddNewPlan className="flex-item" />

        <section className="flex-item">
          <StyledListHeader>
            <h2>List of Plan</h2>
          </StyledListHeader>

          {plans.map(plan => {
            return (
              <StyledPlanListCard className="all-plan-list" key={plan.id}>
                {/*find a way to to use tenary logic to switch when clicking edit   */}
                <Link to={`/plans/${plan.id}`} className="plan-box">
                  <h2>{plan.name}</h2>
                </Link>

                <p className="plan-box">{plan.description}</p>
                <StyledButton className="plan-box">
                  <Link to={`/plans/${plan.id}/edit`} className="button-class">
                    <button type="button" id="button-edit">
                      Edit
                    </button>
                  </Link>

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
          })}
          <div />
        </section>
      </MainStyled>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStatePropsState=>', state)
  return {
    plans: state.plans
    // updatedPlan: state.singlePlanReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlans: () => dispatch(fetchPlans()),
    deletePlanThunk: planId => dispatch(deletePlanThunk(planId))
    //  fetchSinglePlan: planId => dispatch(fetchSinglePlan(planId)),
    // updatePlanThunk: plan => dispatch(updatePlanThunk(plan))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlans)