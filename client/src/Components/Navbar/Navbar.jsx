import React from 'react';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        EN <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Wired</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Wireless</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">TWS</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to="/">Loud & Clear</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to="/products/1">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar