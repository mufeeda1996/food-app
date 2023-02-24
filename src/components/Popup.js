import React from 'react'

// import {useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/Cart'
import CartAdd from './CartAdd'

function Popup({closePopup,showContent,menu,orderOnclick,orderItem}) {
    let { cartCount,cartList}=useSelector((state)=>state.cart)
    let dispatch=useDispatch()
   
    let dishDetails=menu.filter((menuItems)=>{
        return menuItems.strMeal==showContent
    }).map((itemShow)=>
    {
          return(
            <div className='popup-content-inner'>
                <img src={itemShow.strMealThumb}/>
                <h2>{itemShow.strMeal}</h2>
                <h5 className='popup-header-category'>{itemShow.strCategory}</h5>
                <ul className='dish-ingredients flex'>
                <li>{itemShow.strIngredient1}</li>
                <li>{itemShow.strIngredient2}</li>
                <li>{itemShow.strIngredient3}</li>
                <li>{itemShow.strIngredient4}</li>
                </ul>
                <h6 className='instructions'>{itemShow.strInstructions}</h6>
                <button  onClick={()=>{
                  orderOnclick(itemShow.strMealThumb,itemShow.strMeal)
                  dispatch(addToCart(itemShow))}}>order now</button>
                <CartAdd itemShow={itemShow.idMeal} orderOnclick={orderOnclick} />
               <div className='popup-close' onClick={closePopup}>close</div>
            </div>
            
          )
    })
  return (
    <div className='popup'>
        <div className='popup-content'>
            {dishDetails}
            
        </div>
    </div>
  )
}

export default Popup