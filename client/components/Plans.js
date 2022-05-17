import React from 'react'
import {fetchPlans, deletePlanThunk, updatePlanThunk} from '../store/plans'
import {fetchSinglePlan} from '../store/plan'
import {connect} from 'react-redux'
import AddNewPlan from './AddPlan'
import {
  MainStyled,
  HeaderStyled,
  StyledListHeader,
  StyledPlanListCard,
  StyledButton
} from './Plans.styled'
import EditPlan from './EditPlan'
import SinglePlan from './SinglePlan'

export class AllPlans extends React.Component {
  constructor(props) {
    super(props)
    console.log('props inSuper=>', props)
  }

  componentDidMount() {
    this.props.fetchPlans()
  }

  render() {
    console.log('this.state=>', this.state)
    const plans = this.props.plans
    console.log('plans', plans)
    console.log('props=>', this.props)

    return (
      <MainStyled>
        <HeaderStyled className="flex-item">
          <h1>All Plans</h1>
        </HeaderStyled>
        {/* AddNewPlan Component */}
        <AddNewPlan className="flex-item" />

        <section className="flex-item">
          <StyledListHeader>
            <h2>List of Plan</h2>
          </StyledListHeader>

          {plans.map(plan => {
            return (
              <SinglePlan
                key={plan.id}
                id={plan.id}
                name={plan.name}
                plan={plan}
                description={plan.description}
              />
            )
          })}
        </section>
      </MainStyled>
    )
  }
}

const mapStateToProps = state => {
  return {
    plans: state.plans
    // plan: state.singlePlanReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlans: () => dispatch(fetchPlans()),
    deletePlanThunk: planId => dispatch(deletePlanThunk(planId))
    // fetchSinglePlan: planId => dispatch(fetchSinglePlan(planId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlans)
