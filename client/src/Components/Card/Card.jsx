import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`} className='link'>
            <div className='card'>
                <div className="image">
                    <img src={item.img} alt="" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>INR {item.oldPrice}</h3>
                    <h3>INR {item.newPrice}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card