import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Products.scss'
import Footer from '../../Components/Footer/Footer'
import List from '../../Components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import GoToTop from '../../Components/GoToTop';

const Products = () => {

  const catId=parseInt(useParams().id)
  //console.log(id)
  const [maxPrice, setMaxPrice] = useState(3000)
  const [sort, setSort] = useState("asc")
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data, loading, error} =useFetch(`/sub-categories?populate[0]=categories&filters[categories][id][$eq]=${catId}`)
  //console.log(data)
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats)

  return (
    <div>
      <Navbar />
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
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
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
      </div>
      <Footer />
      <GoToTop/>
    </div>
  )
}

export default Products