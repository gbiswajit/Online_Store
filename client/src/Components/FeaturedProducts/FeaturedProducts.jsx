import React, { useEffect, useState } from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card';
import axios from "axios"

const FeaturedProducts = () => {

    const [data, setData] = useState([])

    useEffect (()=>{
        const fetchData= async()=>{
            try{
                const res=await axios.get(process.env.REACT_APP_API_URL+`/products?populate=*&filters[type][$eq]=featured`, {
                    headers:{
                        Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
                    },
                })
                setData(res.data.data)
                console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>Featured Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae quam sapiente reiciendis necessitatibus laudantium iusto, hic tempora officia sint aut ab! Hic accusantium laboriosam eveniet reprehenderit, earum provident quas nemo consequuntur!</p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts