import { increment,decrement } from '../../src/redux/Cart'
import { useDispatch,useSelector } from 'react-redux'

const AddToCart =({orderItem,removeBtn})=>{


    let orderResult=orderItem.map((items)=>{
        
        return(
        <div>
            <div>
            <img src={items.img}></img>
            <h6>{items.title}</h6>
            <div className="plus-minus">
                <button className="plus">+</button>
                <div>0</div>
                <button className="minus">-</button>
            </div>
            <div className="remove">
            <button   onClick={(()=>{
                removeBtn(items)
             })}>remove</button>
             </div>
            </div>
        </div>
        )
       
    })
    
   
    return(
        <div className="add-cart-wrapper">
            <div className="add-cart-item">
             <h5>CART</h5>
             <div className="flex-add">
             {orderResult}
             </div>
            </div>
        </div>
    )
}
export default AddToCart