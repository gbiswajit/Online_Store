import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Products.scss'
import Footer from '../../Components/Footer/Footer'
import List from '../../Components/List/List'
import { useParams } from 'react-router-dom'

const Products = () => {

  const catId=parseInt(useParams().id)
  //console.log(id)
  const [maxPrice, setMaxPrice] = useState(3000)
  const [sort, setSort] = useState(null)
  return (
    <div>
      <Navbar />
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
              <input type='checkbox' id="1" value={1} />
              <label htmlFor="1">Wired</label>
            </div>
            <div className="inputItem">
              <input type='checkbox' id="2" value={1} />
              <label htmlFor="2">Wireless</label>
            </div>
          </div>
          <div className="filterItem">
            <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>o</span>
              <input type="range" min={0} max={3000} onChange={(e) => setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e)=>setSort("asc")}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e)=>setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2021/07/6179_13082.jpg" alt="" className="catImg" />
          <List catId={catId} maxPrice={maxPrice} sort= {sort}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products