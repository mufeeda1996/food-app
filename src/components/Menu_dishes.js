import React, { useContext, useState } from 'react'
import CardItem from './CardItem'
import Popup from './Popup'
import { AllMenu } from "./Api_Menu";



function Menu_dishes({orderOnclick}) 
{
   let specialmenu=useContext(AllMenu)
   let [showPopup,setShowPopup]=useState(false)
   let [showContent,setShowContent]=useState("")
   let [orderItem,setOrderItem]=useState([])


    let maxSpecialMenu=8
    let special_menus=specialmenu.map((menuItems,index)=>{
        if(index<maxSpecialMenu)
        {
        return( 
               <CardItem menuItems={menuItems}
               showPopupHandler={showPopupHandler} />
        )
    }})
    function showPopupHandler(dishName){
      setShowPopup(true)
      setShowContent(dishName)
   }
    function closePopup(){
      setShowPopup(false)
    }
  
   
   
  return (
    <section className='special_dishes'>
      {showPopup && <Popup closePopup={closePopup}
      showContent={showContent}
      menu={specialmenu} 
      orderOnclick={orderOnclick}
     
     />}
        <div className='container'>
         <div className='special_dishes-content text-centre'>
         <h2>Our Special Dishes</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.</p>
         </div>
         <div className='special-dishes-list'>
         <div className='flex flex-wrap'>
            
            {special_menus}
            </div>
         </div>
        </div>
        
    </section>
  )
}

export default Menu_dishes