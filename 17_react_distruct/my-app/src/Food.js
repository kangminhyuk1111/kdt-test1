import PropTypes from 'prop-types';

export default function Food({ food, color }) {
    return (
        <div className='food'>
            <h1 >저는 <span style={{ color: color }}>{food}</span>를 가장 좋아합니다 !</h1>
        </div>
    )
}

Food.defaultProps = {
    food: '오렌지',
    color: 'red'
}