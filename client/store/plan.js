import axios from 'axios'

const initialState = {}

const SET_SINGLE_PLAN = 'SET_SINGLE_PLAN'

export const setSinglePlan = plan => {
  return {
    type: SET_SINGLE_PLAN,
    plan
  }
}

export const fetchSinglePlan = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/plans/${id}`)
      console.log('fetch this single Plan store=>', data)

      dispatch(setSinglePlan(data))
    } catch (err) {
      throw err
    }
  }
}

export default function singlePlanReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PLAN:
      return action.plan
    default:
      return state
  }
}
