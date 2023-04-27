import React from 'react'
import ProductItem from '../components/ProductItem';

export default function Product(props) {
    console.log(props)
    const { products } = props;
    return (
        <div className='Product'>
            <h1>상품목록</h1>
            {products.map((data) => {
                return (<ProductItem products={data} />)
            })}
        </div>
    )
}
