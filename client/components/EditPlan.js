// import React from 'react'
// import {updatePlanThunk} from '../store/plans'
// import {connect} from 'react-redux'
// import {fetchSinglePlan} from '../store/plan'

// const defaultState = {
//   name: '',
//   description: ''
// }

// class EditPlan extends React.Component {
//   constructor() {
//     super()
//     this.state = defaultState

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   componentDidMount() {
//     const planId = this.props.match.params.planId
//     this.props.fetchSinglePlan(planId)
//     const {name, description} = this.props.updatedPlan
//     if (planId) {
//       this.setState({
//         name,
//         description
//       })
//     }
//   }

//   componentDidUpdate(prevProps) {
//     const {name, description, id} = this.props.updatedPlan
//     if (prevProps.updatedPlan.id !== id) {
//       this.setState({
//         name,
//         description
//       })
//     }
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit(event) {
//     event.preventDefault()
//     this.props.updatePlanThunk({
//       ...this.props.updatedplan,
//       ...this.state
//     })
//   }

//   render() {
//     const {name, description} = this.state

//     return (
//     <div>
//       <div className="form">
//         <form id="add-plan-form" onSubmit={this.handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             placeholder="name of plan"
//             onChange={this.handleChange}
//           />

//           <label htmlFor="description">Description:</label>
//           <input
//             type="text"
//             name="description"
//             value={description}
//             placeholder="plan description"
//             onChange={this.handleChange}
//           />

//           <button type="submit" className="submit-button">
//             Save Plan
//           </button>
//         </form>
//       </div>
//     </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     updatedPlan: state.singlePlanReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     updatePlanThunk: plan => dispatch(updatePlanThunk(plan)),
//     fetchSinglePlan: planId => dispatch(fetchSinglePlan(planId))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EditPlan)
