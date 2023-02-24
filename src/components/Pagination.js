import React from 'react'

function Pagination(props) {
    let numberOfPages=[]
for(let i=1;i<=Math.ceil(props.filteredDish.length/props.itemsPage);i++)
{
   numberOfPages.push(i)
}
function changePage(event){
let currentPage=event.target.id
props.setCurrentPageState(currentPage)
}
let pagination=numberOfPages.map((pagenumber)=>{
    return(
        <li id={pagenumber} onClick={changePage}>{pagenumber}</li>
    )
})
console.log("number",numberOfPages)
  return (
    <section>
    <ul className="pagination">{pagination}</ul>
    </section>
  )
}

export default Pagination