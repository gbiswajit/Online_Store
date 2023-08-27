import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card';

const FeaturedProducts = () => {

    const data = [
        {
            id: 1,
            img: "https://cdn.dotpe.in/longtail/store-items/7734548/l581jQXN.jpeg",
            title: "boAt Airdopes 161",
            oldPrice: 1299,
            newPrice: 999
        },
        {
            id: 2,
            img: "https://hammeronline.in/cdn/shop/files/Hammer-bash-2-headphone-bm.webp?v=1689314785&width=800",
            title: "Hammer Bash 2.0",
            oldPrice: 2499,
            newPrice: 1999
        },
        {
            id: 3,
            img: "https://www.boultaudio.com/cdn/shop/files/untitled.871_700x700.png?v=1676443803",
            title: "Boult X1 Buds",
            oldPrice: 499,
            newPrice: 349
        },
        {
            id: 4,
            img: "https://bestheadset.in/wp-content/uploads/2022/10/realme-Techlife-Buds-T100-review.webp",
            title: "realme Techlife Buds T100",
            oldPrice: 1600,
            newPrice: 1499
        }
    ];

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