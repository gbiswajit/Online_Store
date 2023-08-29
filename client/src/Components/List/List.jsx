import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
import useFetch from '../../Hooks/useFetch';

const List = () => {
    const { data, loading, error } = useFetch(
        `/products?populate=*`
    );
    return (
        <div className='list'>
            {error
                ? "Something went wrong!"
                : loading
                    ? "loading"
                    : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    )
}

export default List