import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://lzd-img-global.slatic.net/g/p/81bc0118231198bd852e4f2ccb06ebeb.jpg_1200x1200q80.jpg_.webp",
            title: "My Earphone 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate sint aspernatur, reprehenderit commodi debitis?",
            price: 999
        },
        {
            id: 2,
            img: "https://i.ebayimg.com/images/g/FqsAAOSw07VkfI09/s-l400.jpg",
            title: "My Earphone 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate sint aspernatur, reprehenderit commodi debitis?",
            price: 1299
        },
    ]
    return (
        <div className='cart'>
            <h1>Products on Your Cart</h1>
            {data.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt='' />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 50)}</p>
                        <div className="price">1 * {item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>INR 999</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">
                Reset Cart
            </span>
        </div>
    )
}

export default Cart