import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import React, { useState }  from 'react'
import Hero from "./Hero";
import Menu_dishes from "./Menu_dishes";
import FilteredDishes from "./FilteredDishes";
import {Api_Menu} from "./Api_Menu";
import Header from "./Header";
import AddToCart from './AddToCart';
import Login from './Login'



function Menu({user}) {
  
  let [orderItem,setOrderItem]=useState([])
  function orderOnclick(image,item){
    setOrderItem(
    [
      ...orderItem,
      {
         "img":image,
         "title":item
      }
   ]
    )
    
   }
   function removeBtn(image){
    setOrderItem([...orderItem].filter ((currentImage)=>{
      return(
        currentImage!=image
      )
    }))
  }
    
  return (
<div>
<Router>
    <Header user={user}/>
    <Hero/>
    {user ?
    <Routes>
    <Route path='/' element={
    <Api_Menu>
    <Menu_dishes orderOnclick={orderOnclick} />
    <FilteredDishes />
    </Api_Menu>
    }/> 
    <Route path='/cart' element={<AddToCart orderItem={orderItem} removeBtn={removeBtn} />}/>
   </Routes> : <Login/>}
   </Router>
    </div>
  )
}

export default Menu