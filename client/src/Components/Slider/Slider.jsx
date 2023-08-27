import React, { useState } from 'react'
import "./Slider.scss"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

const data = [
    "https://wallpaperaccess.com/full/5189190.jpg",
    "https://wallpaperaccess.com/full/4061967.jpg",
    "https://wallpaperaccess.com/full/5189161.jpg",
];

const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide -1);
};
const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide +1);
};

    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider