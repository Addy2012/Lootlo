import SHOP_DATA from './shopdata';
import ShopActionTypes from './shopTypes'; 

const INITIAL_DATA = {
    collections: SHOP_DATA
}


const shopReducer = ( state=INITIAL_DATA, action ) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS :
            return {
                ...state,
                collections : action.payload
            }
        default:
            return state
    }
}



export default shopReducer;