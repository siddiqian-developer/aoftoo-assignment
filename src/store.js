import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import Cookie from "js-cookie";
import { productsListReducer } from './reducers/productReducers';
import bagReducer from './reducers/bagReducer';
import errorsReducer from './reducers/errorReducer';

const bagItems = Cookie.getJSON("bagItems") || [];
const verifiedUser = Cookie.getJSON("verifiedUser") || null;

const reducer = combineReducers({
  productsList: productsListReducer,
  bag: bagReducer,  
  errors: errorsReducer,
})              


const initialState = { 
  bag: { bagItems, 
    deliveryDetails: {}, 
    paymentMethod: {} },
  errors: {},
  user: { 
    login: { verifiedUser }, 
    register: { registeredUser: null } 
  },
  wizardStep: 0 
};
// const initialState = {};
console.log(initialState)
const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhanced(applyMiddleware(thunk)));
// console.log(reducer)

export default store;