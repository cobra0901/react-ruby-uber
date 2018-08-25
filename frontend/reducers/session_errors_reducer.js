import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions'

 const sessionErrorsReducer = (oldState = [], action) => {

  Object.freeze(oldState)
  switch (action.type) {
    case CLEAR_ERRORS:
    case RECEIVE_CURRENT_USER:
      return []
    case RECEIVE_ERRORS:
      return action.errors
    default:
      return oldState
  }
}

export default sessionErrorsReducer;
