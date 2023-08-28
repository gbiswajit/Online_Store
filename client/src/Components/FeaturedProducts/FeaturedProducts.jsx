import React, { useEffect, useState } from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card';
import axios from "axios"
const FeaturedProducts = () => {

    const [data, setData] = useState([])

    useEffect (()=>{
        const fetcchData= async()=>{
            try{
                const res=await axios.get("http://localhost:1337/api"+"/products?populate=*", {
                    headers:{
                        Authorization: "bearer" + "560e4ba022ce16556f2dfd7f14c3f55c2b7646c07c2859803e762dbb5e32de346d19ed911097cc7fe4c14e2437862ea736eff18d6e6d586986d54d92a060ba2592fcb00ada4d4ce59c36c0f08b95a7c41993a1b8db4bf08e1d15fbe793f83cf028e564a3648151cac2d3672eca5cb3f6f750e537c7930663c60b5bdbd2145df8",
                    },
                })
                setData(res.data.data)
                console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetcchData()
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