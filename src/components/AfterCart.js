import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement } from '../../src/redux/Cart'
import '../App.scss'
function AfterCart({cartCount,itemShow}) {
  let { cartList}=useSelector((state)=>state.cart)
  let dispatch=useDispatch()

 
  

  return (
    <div className='aftercart'>
     <div className='aftercart-button'>
     <div className='aftercart-increment'>
        <button onClick={()=>{
          dispatch(increment(itemShow))}}>+</button>
      </div>
       <div className='cart-count'>{cartCount}</div>
       <div className='aftercart-decrement'>
        <button onClick={()=>dispatch(decrement(itemShow))}>-</button>
     </div>
     </div>
    </div>
  )
}

export default AfterCart