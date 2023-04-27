import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail(props) {
    const { products } = props;
    const productId = useParams();
    const targetProduct = products.filter((data) => `${data.id}` === productId.productId)
    return (
        <div className='ProductDetail'>
            <h1>상세정보</h1>
            {targetProduct.length > 0 ? targetProduct.map((data) => {
                return <ul>
                    <li>{data.id}</li>
                    <li>{data.name}</li>
                    <li>{data.email}</li>
                    <li>{data.body}</li>
                </ul>
            }) : <h3>존재하지 않는 상품입니다.</h3>}
        </div>
    )
}
