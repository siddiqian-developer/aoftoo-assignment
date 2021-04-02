import Axios from "axios"
import { 
  ADD_ITEM_TO_CART_REQUEST_PROCESSING,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_FAIL,
  REMOVE_ITEM_FROM_CART, 
  SAVE_DELIVERY_DETAILS, 
  SAVE_PAYMENT_METHOD, 
  DELETE_CART
  } from "../constants/actionTypes"
import Cookie from "js-cookie";



const addToBagError = (product_id, qty) => async (dispatch, getState) => {

  dispatch({type: ADD_ITEM_TO_CART_REQUEST_PROCESSING})

    try {
        const { data } = await Axios.get('/api/products/' + product_id);
        const product = data;

        if (product) {
          const bagItemDetails = {
              product_id: product._id,
              name: product.name,
              image: product.image,
              price: product.price,
              availableQty: product.availableQty,
              qty
          }        
          
          dispatch({type: ADD_ITEM_TO_CART, payload: bagItemDetails})

          const { bag: { bagItems } } = getState();
          Cookie.set("bagItems", JSON.stringify(bagItems));
        }
      else throw new Error('Error in adding the item to the bag');
        
    } catch (error) {

        const errorAddingToBag 
        = 
        error.message
        ?
        error.message
        :
        error.response.data.message;

        console.log(errorAddingToBag)

        dispatch({type: ADD_ITEM_TO_CART_FAIL, payload: {
          erroredProduct_id: product_id,
          error: errorAddingToBag          
        }})
    }
}

const removeFromBag = (productID) => (dispatch) => {
    dispatch({type: REMOVE_ITEM_FROM_CART, payload: productID})
}

const saveDeliveryDetails = (deliveryDetails) => (dispatch) => {
    dispatch({type: SAVE_DELIVERY_DETAILS, payload: deliveryDetails})
}

const savePaymentMethod = (paymentMethod) => (dispatch) => {
    console.log(paymentMethod)
    dispatch({type: SAVE_PAYMENT_METHOD, payload: paymentMethod})
}

const deleteBag =  () => (dispatch) => {
    Cookie.remove("bagItems");
    dispatch({type: DELETE_CART})
}


export { addToBag, removeFromBag, saveDeliveryDetails, savePaymentMethod, deleteBag }