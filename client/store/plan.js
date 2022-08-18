import axios from 'axios'

const initialState = {}
//action creator for SET_SINGLE_PLAN

const SET_SINGLE_PLAN = 'SET_SINGLE_PLAN'

export const setSinglePlan = plan => {
  return {
    type: SET_SINGLE_PLAN,
    plan
  }
}
// thunk for SET_SINGLE_PLAN
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

///Reducer
export default function singlePlanReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PLAN:
      return action.plan
    default:
      return state
  }
}
