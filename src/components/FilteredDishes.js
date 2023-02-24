import React, { useContext, useState,useEffect } from 'react'
import CardItem from './CardItem';
import Pagination from './Pagination';
import { AllMenu } from "./Api_Menu";
function FilteredDishes() {
 
  let [filterDish,setFilterDish]=useState([])
  let [singleDish,setSingleDish]=useState([])

  useEffect(() => {
      getFilterMenu();
      beefMenu()
    }, []);

  
  async function getFilterMenu() {
      const API_URL= "http://www.themealdb.com/api/json/v1/1/categories.php"
      const response = await fetch(API_URL);
      let filterData=await response.json()
      setFilterDish(filterData.categories)
    
  }
  async function beefMenu() {
      // setLoading(true)
      const API_URL= "http://www.themealdb.com/api/json/v1/1/filter.php?c=beef"
      const response = await fetch(API_URL);
      let beefData=await response.json()
      setSingleDish(beefData.meals)

      
      
    
  }


  let allMenus=useContext(AllMenu)
  

 let [allMenu,setAllMenu]=useState(allMenus)
 let [filteredDish,setFilteredDish]=useState([])
 let [activeDish,setActiveDish]=useState("beef")
 let [currrentPageState,setCurrentPageState]=useState(1)
 let [itemPerPage,setItemPerPage]=useState(4)
 let lastIndexOf =currrentPageState * itemPerPage
 let firstIndexOf= lastIndexOf - itemPerPage

  let showDishes=filteredDish.slice(firstIndexOf,lastIndexOf)
  let maxItem=4
  let beefDish= singleDish.map((menuItems,index)=>{
  if(index<maxItem){
  return(
    <CardItem menuItems={menuItems  } /> 
  )}
  function orderOnclick(){
  }
})

function filteredFunctions(Category){
  setSingleDish([])
  setActiveDish(Category)
  let filteredItemsAre=allMenu.filter((item)=>{
    return item.strCategory===Category
  }).map((item)=>{
    return(
      <div><img src={item.strMealThumb}/>
      <h5>{item.strMeal}</h5>
      </div> 
      )
  })
  
  setFilteredDish(filteredItemsAre)
  
}

 let filterDishs=filterDish.map((filterItem)=>{

 return(
    <li className={filterItem.strCategory===activeDish ? "active" : ""}  onClick={()=>{filteredFunctions(filterItem.strCategory)}}>
     {filterItem.strCategory}
    </li>
 )
 }) 
 
 
  return (
    <div className='filterd-dishes'>
      <div className='container'>
        <div className='text-centre'>
        <h2>Choose your dishes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
           <ul className='filterd-dishes'>
            {filterDishs}
           </ul>
        </div>
        <div className='filtered-dishes-results'>
          <div className='flex flex-wrap'>
            {beefDish }
            {beefDish !=0 || filteredDish.length !=0 ? showDishes : <div className='alert'>
               <h2>Not found</h2>
               <h3>please choose another one</h3></div> }
          </div>
        </div>
        <Pagination filteredDish={filteredDish}
        itemsPage={itemPerPage}
        setCurrentPageState={setCurrentPageState} />
        
      </div>
    </div>
  )
}

export default FilteredDishes


















