import React, { useEffect, useState } from 'react'
import Loader from './Loader';
export const AllMenu=React.createContext()
export  const Api_Menu=(props)=> {
    let [menu,setMenu] =useState([])
    let [loading,setLoading]=useState(false)

    useEffect(() => {
        getMenu();
      }, []);

    async function getMenu() {
        setLoading(true)
        const API_URL= "http://www.themealdb.com/api/json/v1/1/search.php?f=c"
        
        const response = await fetch(API_URL);
        let data=await response.json()
        console.log("menu ",data)
         setMenu(data.meals)
         setLoading(false)
      }
      
  return (
                <AllMenu.Provider value={menu}>
                   {!loading ?  props.children : <Loader/> }
                </AllMenu.Provider>
  )
}

//  default Api_Menu