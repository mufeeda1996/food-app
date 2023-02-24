import React from 'react'
import AfterCart from './AfterCart'
import { useSelector } from 'react-redux'
function CartAdd({itemShow,orderOnclick,orderItem}) {
   
   
    let {cartList}=useSelector((state)=>state.cart)
    let cartCount=  cartList ?.find((item)=>item?.idMeal===itemShow)?.count

    console.log("count=====",cartCount);
  return (
    <div>
      {cartCount > 0 ? <AfterCart cartCount={cartCount} itemShow={itemShow} orderOnclick={orderOnclick} orderItem={orderItem}/>:null}  
      </div>
  )
}

export default CartAdd