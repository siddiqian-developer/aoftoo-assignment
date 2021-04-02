import Axios from "axios";

const { PRODUCTS_LIST_REQUEST_SUCCESSFUL, 
    PRODUCTS_LIST_REQUEST_FAIL, 
    PRODUCTS_LIST_REQUEST_PROCESSING, 
    } = require("../constants/actionTypes");

const getProductsList = () => async (dispatch, getState) => {
    dispatch({ type: PRODUCTS_LIST_REQUEST_PROCESSING });
    try{        
        const { data } = await Axios.get('https://my-json-server.typicode.com/benirvingplt/products/products');
        dispatch({ type: PRODUCTS_LIST_REQUEST_SUCCESSFUL, payload: data });
    }
    
    catch(error) {
        console.log(error)
        dispatch({ type: PRODUCTS_LIST_REQUEST_FAIL, payload: error.message })
    }
}

export { getProductsList }