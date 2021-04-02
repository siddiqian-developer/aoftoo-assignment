import { 
  SET_ADD_TO_CART_ERROR,
  SET_LOGIN_ERROR
} from '../constants/actionTypes'



function errorsReducer(state = {}, action) {
  switch(action.type) {
    case SET_ADD_TO_CART_ERROR:
      return {
        errorAddToBag: {
          errorID: action.payload.errorID,
          errorName: action.payload.errorName,
          errorMessage: action.payload.errorMessage,
          errorBody: null
        }
      }
    case SET_LOGIN_ERROR:
      return {
        errorLogin: {
          errorID: action.payload.errorID,
          errorName: action.payload.errorName,
          errorMessage: action.payload.errorMessage,
          errorBody: null
        }
      }
    default:
      return state;
    }
}

export default errorsReducer;
 