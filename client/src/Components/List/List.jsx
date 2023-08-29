import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
import useFetch from '../../Hooks/useFetch';

const List = ({ catId, maxPrice, sort, subCats }) => {
    
    const { data, loading, error } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${catId}${subCats.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)

    //console.log(sort)

    return (
        <div className='list'>
            {error
                ? console.log(error)
                : loading
                    ? "loading"
                    : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    )
}

export default List