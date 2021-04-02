import { 
  REMOVE_ITEM_FROM_CART, 
  SAVE_PAYMENT_METHOD, 
  SAVE_DELIVERY_DETAILS, 
  DELETE_CART, 
  ADD_ITEM_TO_CART_FAIL,  
  ADD_ITEM_TO_CART_REQUEST_SUCCESS
} from '../constants/actionTypes'
import Cookie from "js-cookie";




function bagReducer(state = {}
, action) {
  switch(action.type) {
    // case ADD_ITEM_TO_CART_REQUEST_PROCESSING:
    //   return {errorAddingToBag: {
    //     erroredProduct_id: null,
    //     error: null}}
    case ADD_ITEM_TO_CART_REQUEST_SUCCESS:
      const itemToBeAdded = action.payload;
      // console.log(bagItems) 

      const isItemPresent = state.bagItems.find(bagItem => bagItem.id === itemToBeAdded.id)
      console.log(isItemPresent) 
      if(isItemPresent)
        return {
          bagItems:
          state.bagItems.map(bagItem => bagItem.id === isItemPresent.id ? itemToBeAdded : bagItem) 
        }  
      return {bagItems: [...state.bagItems, itemToBeAdded]}

    case  ADD_ITEM_TO_CART_FAIL:
      return {errorAddingToBag: action.payload}
    
    case REMOVE_ITEM_FROM_CART:
      const productToBeRemoved_id = action.payload;
      const updatedBagItems = state.bagItems.filter(item => item.id !== productToBeRemoved_id);            
      Cookie.set("bagItems", JSON.stringify(updatedBagItems));
      return {bagItems: updatedBagItems}
    
    case SAVE_DELIVERY_DETAILS:
      return {...state, deliveryDetails: action.payload}
      
    case SAVE_PAYMENT_METHOD:
      return {...state, paymentMethod: action.payload}

    case DELETE_CART:
      return {...state, bagItems: [], deliveryDetails: {}, paymentMethod: {}}
    default:
      return state;
    }
}

export default bagReducer;
 