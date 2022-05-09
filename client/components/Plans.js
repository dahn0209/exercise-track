import React from 'react'
import {fetchPlans, deletePlanThunk} from '../store/plans'
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
export class AllPlans extends React.Component {
  componentDidMount() {
    this.props.fetchPlans()
  }

  render() {
    const plans = this.props.plans
    // console.log('plans=>', plans)
    // console.log('state=>', this.state)
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
                <Link to={`/plans/${plan.id}`} className="plan-box">
                  <h2>{plan.name}</h2>
                </Link>

                <p className="plan-box">{plan.description}</p>

                <StyledButton className="plan-box">
                  <Link to={`/plans/${plan.id}/edit`} className="edit-button">
                    <button type="button" id="button-edit">
                      Edit
                    </button>
                  </Link>
                  <div className="edit-button">
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
  return {
    plans: state.plans
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlans: () => dispatch(fetchPlans()),
    deletePlanThunk: planId => dispatch(deletePlanThunk(planId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlans)
