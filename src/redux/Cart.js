import { createSlice } from "@reduxjs/toolkit";


let INITIAL_STATE={
    cartList:[],
    cartCount:0
    
}


let cartSlice=createSlice({
 name:"cart",
 initialState:INITIAL_STATE,
 reducers:{
    addToCart:(state,action)=>{
         state.cartList.push ({
            ...action.payload,
            count:1
         })
        
    },
    increment:(state,action)=>{
       let itemShow=action.payload;
        state.cartList.forEach((item)=>{
        if(item.idMeal===itemShow){
            item.count++
        }
    })
    console.log("incre",itemShow)
    },
    decrement:(state,action)=>{
       let itemShow=action.payload;
        state.cartList.forEach((item)=>{
        if(item.idMeal===itemShow){
            item.count--
        }
    })
    console.log("xincre",itemShow)
    }
 }

})
export const {addToCart,increment,decrement}=cartSlice.actions

export default cartSlice.reducer