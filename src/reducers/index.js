import { combineReducers } from 'redux'

const notes = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_TOP_TITLES':
      return {...state, all_top_titles: action.payload};
    case 'IsAddTopTiTlesState':
      return {...state, isAddTopTitle: action.payload};
    case 'IsDelTopTiTlesState':
      return {...state, isDelTopTitle: action.payload};
    case 'ERRORS':
      return {...state, errors: action.payload};
    default:
      return state
  }
}


export default combineReducers({
  notes
})
