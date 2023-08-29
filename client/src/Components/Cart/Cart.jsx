import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"
import {useDispatch, useSelector} from "react-redux"
import { removeItem, resetCart } from '../../Redux/cartReducer';

const Cart = () => {
    
    const products= useSelector((state)=> state.cart.products)
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
      };
      const dispatch= useDispatch()

    return (
        <div className='cart'>
            <h1>Products on Your Cart</h1>
            {products.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt='' />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 50)}</p>
                        <div className="price">{item.quantity} * {item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>INR {totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    )
}

export default Cart