import React from 'react'
// import {
//   fetchPlans,
//   deletePlanThunk
// } from '../store/plans'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import AddNewPlan from './AddPlan'

export class AllPlans extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPlans()
  // }

  render() {
    // const plans = this.props.Plans
    return (
      // <div>
      //   {/* <AddNewPlan /> */}
      //   <h1>All Plans</h1>
      //   <h2>List of Plan:</h2>
      //   {plans.map(plan => {
      //     return (
      //       <div className="all-plan-list" key={plan.id}>
      //         <div>
      //           <Link to={`/plans/${plan.id}`}>
      //             <h2>{plan.name}</h2>
      //             {/* <img src={plan.imageUrl} /> */}
      //           </Link>
      //           <p>{plan.description}</p>
      //           {/* <h3>Price:{plan.price / 100}</h3> */}
      //           <div>
      //             <Link to={`/plans/${plan.id}/edit`}>
      //               <button type="button">Edit Plan</button>
      //             </Link>

      //             <button
      //               type="button"
      //               onClick={() => this.props.deletePlanThunk(plan)}
      //             >
      //               Remove Plan
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     )
      //   })}
      //   <div />
      // </div>
      <div>HELLO!!!! DEEEE!!!!</div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     Plans: state.Plans
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     FetchPlans: () => dispatch(FetchPlans()),
//     deletePlanThunk: planId => dispatch(deletePlanThunk(planId))
//   }
// }

export default AllPlans
// connect(mapStateToProps, mapDispatchToProps)
// (AllPlans)
