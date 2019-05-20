import { combineReducers } from 'redux'

const notes = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_ALL_TOP_TITLES':
      return {...state, all_top_titles: action.payload};
    case 'MAIN_CONTENT_STATE':
      return {...state, main_content_state: action.payload};
    case 'ERRORS':
      return {...state, errors: action.payload};
    default:
      return state
  }
}


export default combineReducers({
  notes
})
