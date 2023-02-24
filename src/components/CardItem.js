import React from 'react'

function CardItem(props) {

  return (
    <div className='menu-special' >
     <a href='javascript:;' onClick={()=>{props.showPopupHandler(props.menuItems.strMeal)}}>
    <img src={props.menuItems.strMealThumb}/>
    <h5>{props.menuItems.strMeal}</h5>
    </a>
    </div>
  )
}

export default CardItem