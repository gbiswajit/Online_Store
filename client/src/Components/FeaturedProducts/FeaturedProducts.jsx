import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFetch';

const FeaturedProducts = () => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&filters[type][$eq]=featured`
    );

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>Featured Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae quam sapiente reiciendis necessitatibus laudantium iusto, hic tempora officia sint aut ab! Hic accusantium laboriosam eveniet reprehenderit, earum provident quas nemo consequuntur!</p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts