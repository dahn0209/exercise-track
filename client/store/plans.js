import axios from 'axios'

const SET_PLANS = 'SET_PLANS'
const CREATE_PLAN = 'CREATE_PLAN'
const DELETE_PLAN = 'DELETE_PLAN'
const UPDATE_PLAN = 'UPDATE_PLAN'

//action creator for SET_PLANS
export const setPlans = plans => {
  return {
    type: SET_PLANS,
    plans
  }
}

// thunk for SET_PLANS
export const fetchPlans = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/plans')
      dispatch(fetchPlans(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// action creator for CREATE_PLAN
export const createPlan = plan => {
  return {
    type: CREATE_PLAN,
    plan
  }
}

// thunk for CREATE_PLAN
export const createNewPlan = plan => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/plans', plan)
      const newPlan = response.data
      dispatch(createPlan(newPlan))
    } catch (error) {
      console.log(error)
    }
  }
}

//action creator for DELETE_PLAN
export const deletePlan = plan => {
  return {
    type: DELETE_PLAN,
    plan
  }
}

//thunk for DELETE_PLAN
export const deletePlanThunk = plan => {
  return async dispatch => {
    try {
      await axios.delete(`/api/plans/${plan.id}`)
      dispatch(deletePlan(plan))
    } catch (error) {
      console.log(error)
    }
  }
}

//action creator for UPDATE_PLAN
export const updatePlan = plan => {
  return {
    type: UPDATE_PLAN,
    plan
  }
}

//thunk for UPDATE_PLAN
export const updatePlanThunk = plan => {
  return async dispatch => {
    try {
      const response = await axios.put(`/api/plans/${plan.id}`, plan)
      console.log('plans Response=>', response)
      const updatedPlan = response.data

      dispatch(updatePlan(updatedPlan))
      console.log('UPDATED!!!!')
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = []

//reducer
export default function plansReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLANS:
      return action.plans
    case CREATE_PLAN:
      return [...state, action.plan]
    case DELETE_PLAN:
      return state.filter(plan => plan.id !== action.plan.id)
    case UPDATE_PLAN:
      return state.map(plan => {
        return plan.id === action.plan.id ? action.plan : plan
      })
    default:
      return state
  }
}
