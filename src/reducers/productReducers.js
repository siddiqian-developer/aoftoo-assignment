import { PRODUCTS_LIST_REQUEST_PROCESSING,PRODUCTS_LIST_REQUEST_SUCCESSFUL,PRODUCTS_LIST_REQUEST_FAIL, PRODUCT_DETAILS_REQUEST_PROCESSING, PRODUCT_DETAILS_REQUEST_SUCCESSFUL, PRODUCT_DETAILS_REQUEST_FAIL, CREATE_PRODUCT_REQUEST_PROCESSING, CREATE_PRODUCT_REQUEST_SUCCESSFUL, CREATE_PRODUCT_REQUEST_FAIL, EDIT_PRODUCT_REQUEST_PROCESSING, EDIT_PRODUCT_REQUEST_SUCCESSFUL, EDIT_PRODUCT_REQUEST_FAIL, DELETE_PRODUCT_REQUEST_PROCESSING, DELETE_PRODUCT_REQUEST_SUCCESSFUL, DELETE_PRODUCT_REQUEST_FAIL } from '../constants/actionTypes'

function createProductReducer(state={}, action) {
    switch(action.type) {
        case CREATE_PRODUCT_REQUEST_PROCESSING:
            return ({creating: true})
        case CREATE_PRODUCT_REQUEST_SUCCESSFUL:
            return ({creating: false, createdProduct: action.payload})
        case CREATE_PRODUCT_REQUEST_FAIL:
            return ({creating: false, error: action.payload})
        default:
            return state;
    }
}

function productsListReducer(state={products: []}, action){
    switch(action.type) {
        case PRODUCTS_LIST_REQUEST_PROCESSING:
            return {loading: true};
        case PRODUCTS_LIST_REQUEST_SUCCESSFUL:
            return {loading: false, products: action.payload};
        case PRODUCTS_LIST_REQUEST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

function singleProductDetailsReducer (state={productDetails: {}}, action) {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST_PROCESSING:
            return {loading: true};
        case PRODUCT_DETAILS_REQUEST_SUCCESSFUL:
            return {loading: false, productDetails: action.payload};
        case PRODUCT_DETAILS_REQUEST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

function editProductReducer (state={editedProduct: {}}, action) {
    switch(action.type) {
        case EDIT_PRODUCT_REQUEST_PROCESSING:
            return {editing: true}
        case EDIT_PRODUCT_REQUEST_SUCCESSFUL:
            return {editing: false, editedProduct: action.payload}
        case EDIT_PRODUCT_REQUEST_FAIL:
            return {editing: false, error: action.payload}
        default:
            return state;
    }
}


function deleteProductReducer (state={}, action) {
    switch(action.type) {
        case DELETE_PRODUCT_REQUEST_PROCESSING:
            return {editing: true}
        case DELETE_PRODUCT_REQUEST_SUCCESSFUL:
            return {editing: false, editedProduct: action.payload}
        case DELETE_PRODUCT_REQUEST_FAIL:
            return {editing: false, error: action.payload}
        default:
            return state; 
    }

}

export { productsListReducer, singleProductDetailsReducer, createProductReducer, editProductReducer, deleteProductReducer };
