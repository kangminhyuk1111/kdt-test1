import './App.css';

export default function Book({ title, author, price, type }) {
    return (
        <div className='book'>
            <h2>이번주 베스트 셀러</h2>
            <img src='' />
            <h3>{title}</h3>
            <h4>저자 : {author}</h4>
            <h4>판매가 : {price}</h4>
            <h4>구분 : {type}</h4>
        </div>
    )
}
