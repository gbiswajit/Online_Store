import React from 'react'
import './Categories.scss'
import { Link } from "react-router-dom"

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img
                        src="https://ischool.syr.edu/wp-content/uploads/normal-headphones-004-1500x1000-1.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            In-Ear
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://www.amkette.com/cdn/shop/collections/Bluetooth_Headsets.jpg?v=1683610833"
                        alt=""
                    />
                    <button>
                        <Link to="/products/2" className="link">
                            True Wireless
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    {" "}
                    <img
                        src="https://www.masterdynamic.eu/cdn/shop/files/Collab_Mobile.jpg?v=1679486036"
                        alt=""
                    />
                    <button>
                        <Link to="/products/3" className="link">
                            Over-Ear
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://static.toiimg.com/thumb/msid-82034304,width-1280,resizemode-4/82034304.jpg"
                                alt=""
                            />
                            <button>
                                <Link to="/products/4" className="link">
                                    Neck Band
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            {" "}
                            <img
                                src="https://gadgetviper.com/blog/wp-content/uploads/2016/01/kotion-each-g2000-gaming-headset-review.jpg"
                                alt=""
                            />
                            <button>
                                <Link to="/products/5" className="link">
                                    Gaming
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img
                        src="https://i.ebayimg.com/thumbs/images/g/WbYAAOSw9x1kyXfz/s-l1200.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/6" className="link">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories