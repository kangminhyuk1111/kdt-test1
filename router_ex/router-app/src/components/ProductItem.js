import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
    const sliceLength = 100;
    const { products } = props;
    return (
        <Link to={'/product/' + products.id}>
            <ul className='ProductItem'>
                <li>상품명 : {products.name}</li>
                <li>상세설명 : {products.email}</li>
                <li>
                    제품설명 : {products.body.length > sliceLength ?
                        products.body.slice(0, sliceLength) + '....' :
                        'false'}
                </li>
            </ul>
        </Link>
    )
}
