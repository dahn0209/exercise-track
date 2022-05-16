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
import EditPlan from './EditPlan'

export class AllPlans extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }

    this.editPlanBox = this.editPlanBox.bind(this)
  }

  componentDidMount() {
    this.props.fetchPlans()
  }

  editPlanBox(planId) {
    return <EditPlan key={planId} id={planId} />
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
            console.log('plans inside Map=>', plans)
            console.log('bind map=>', this.editPlanBox(plan.id))
            return (
              <StyledPlanListCard
                className="all-plan-list"
                key={plan.id}
                id={plan.id}
              >
                {/*find a way to to use tenary logic to switch when clicking edit   */}
                <Link to={`/plans/${plan.id}`} className="plan-box">
                  <h2>{plan.name}</h2>
                </Link>
                <p className="plan-box">{plan.description}</p>
                <StyledButton className="plan-box">
                  {/* <Link to={`/plans/${plan.id}/edit`} className="button-class"> */}
                  <div className="button-class">
                    <button
                      type="button"
                      id="button-edit"
                      onClick={() => {
                        console.log('click Id=>', plan.id)
                        this.editPlanBox(plan.id)
                        console.log(
                          'click editPlan=>',
                          this.editPlanBox(plan.id)
                        )
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
          })}
          <div />
        </section>
      </MainStyled>
    )
  }
}

const mapStateToProps = state => {
  return {
    plans: state.plans,
    plan: state.singlePlanReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlans: () => dispatch(fetchPlans()),
    deletePlanThunk: planId => dispatch(deletePlanThunk(planId)),
    fetchSinglePlan: planId => dispatch(fetchSinglePlan(planId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlans)
