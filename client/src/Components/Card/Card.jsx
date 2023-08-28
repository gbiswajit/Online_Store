import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`} className='link'>
            <div className='card'>
                <div className="image">
                    <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt="" />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    <h3>INR {item?.attributes.oldPrice || item?.attributes.price+300}</h3>
                    <h3>INR {item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card