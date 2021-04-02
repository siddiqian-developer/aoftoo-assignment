import Axios from "axios"
import { 
  ADD_ITEM_TO_CART_REQUEST_PROCESSING,
  REMOVE_ITEM_FROM_CART, 
  SAVE_DELIVERY_DETAILS, 
  SAVE_PAYMENT_METHOD, 
  DELETE_CART,
  SET_ADD_TO_CART_ERROR,
  ADD_ITEM_TO_CART_REQUEST_SUCCESS
  } from "../constants/actionTypes"
import Cookie from "js-cookie";



const addToBag = (product, qty) => async (dispatch, getState) => {

  dispatch({type: ADD_ITEM_TO_CART_REQUEST_PROCESSING})

    try {
          const bagItemDetails = {
            id: product.id,
            name: product.name,
            img: product.img,
            price: product.price,
            availableQty: 100,
            qty
          }     
            
          console.log(bagItemDetails)

          
          dispatch({type: ADD_ITEM_TO_CART_REQUEST_SUCCESS, payload: bagItemDetails})

          const { bag: { bagItems } } = getState();

          console.log(bagItems)

          Cookie.set("bagItems", JSON.stringify(bagItems));
            
    } catch (error) {

        const errorAddingToBag 
        = 
        error.message
        ?
        error.message
        :
        error.response.data.message;

        console.log(errorAddingToBag)

        dispatch({type: SET_ADD_TO_CART_ERROR, payload: {
          errorID: product.id,
          errorName: "Error Adding to bag",
          errorMessage: errorAddingToBag          
        }})
    }
}

const updateItemOfBag = (product_id, newQty, previousQty) => async (dispatch, getState) => {

  var updatedItem = null;
  var updatedProduct = null;

  dispatch({type: ADD_ITEM_TO_CART_REQUEST_PROCESSING})

    try {
      const updatedItemObj = await Axios.get('/api/products/' + product_id);
      if (updatedItemObj) {
        updatedItem = { ...updatedItemObj.data };
        const updatedProduct_id = updatedItem._id;
        const updatedQty = {
          updatedQty: 
          parseInt(updatedItem.availableQty)-(parseInt(newQty)-parseInt(previousQty))
        };           
        
        const updatedProductObj 
        = 
        await Axios.put('/api/products/update-qty/' + updatedProduct_id, updatedQty)
        if(updatedProductObj) { 
          updatedProduct = { ...updatedProductObj.data };         
          if (updatedItem && updatedProduct) {
            const bagItemDetails = {
              product_id: updatedItem._id,
              name: updatedItem.name,
              image: updatedItem.image,
              price: updatedItem.price,
              availableQty: updatedItem.availableQty,
              qty: newQty
            }     
              
            console.log(bagItemDetails)

            
            dispatch({type: ADD_ITEM_TO_CART_REQUEST_SUCCESS, payload: bagItemDetails})

            const { bag: { bagItems } } = getState();

            console.log(bagItems)

            Cookie.set("bagItems", JSON.stringify(bagItems));
            }
          }
        else  throw new Error('Error in updating qty')
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

        dispatch({type: SET_ADD_TO_CART_ERROR, payload: {
          errorID: product_id,
          errorName: "Error Adding to bag",
          errorMessage: errorAddingToBag          
        }})
    }
}


const removeFromBag = (id, qty) => async (dispatch, getState) => {

  try {
         
          dispatch({type: REMOVE_ITEM_FROM_CART, payload: id})
    
      } catch (error) {

      const errorAddingToBag 
      = 
      error.message
      ?
      error.message
      :
      error.response.data.message;

      console.log(errorAddingToBag)

      dispatch({type: SET_ADD_TO_CART_ERROR, payload: {
        errorID: id,
        errorName: "Error Adding to bag",
        errorMessage: errorAddingToBag          
      }})
  }
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


export { addToBag, updateItemOfBag, removeFromBag, saveDeliveryDetails, savePaymentMethod, deleteBag }