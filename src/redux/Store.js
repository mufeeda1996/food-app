import { configureStore} from "@reduxjs/toolkit";
import cartReducer from './Cart'

let Store=configureStore({
   reducer:{
    cart:cartReducer 
   }
})

export default Store