import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import GoToTop from '../../Components/GoToTop';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartReducer';

const Product = () => {
  const id = parseInt(useParams().id);
  //console.log(id)
  const dispatch= useDispatch()
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div>
      <Navbar />
      <div className='product'>
        {error
          ? "Something went wrong!"
          : loading ? (
            "loading"
          ) : (
            <>
              <div className="left">
                <div className="mainImg">
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img?.data?.attributes?.url
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="right">
                <h1>{data?.attributes?.title}</h1>
                <span className="price">INR {data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>
                <div className="quantity">
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                  {quantity}
                  <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add" onClick={()=>dispatch(addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity
                }))}>
                  <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                  <div className="item">
                    <FavoriteBorderIcon /> ADD TO WISH LIST
                  </div>
                  <div className="item">
                    <BalanceIcon /> ADD TO COMPARE
                  </div>
                </div>
                <hr />
                <div className="info">
                  <span>DESCRIPTION</span>
                  <hr />
                  <span>ADDITIONAL INFORMATION</span>
                  <hr />
                  <span>FAQ</span>
                </div>
              </div>
            </>
          )}

      </div>
      <Footer />
      <GoToTop/>
    </div>
  )
}

export default Product