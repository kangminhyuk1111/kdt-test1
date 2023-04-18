import PropTypes from 'prop-types';

export default function FunctionComponent({ name, age }) {
    return (
        <div>
            <h1>hello FunctionComponent!, Function</h1>
            <h2>이름 : {name}</h2>
            <h2>나이 : {age}</h2>
        </div>
    )
}

FunctionComponent.defaultProps = {
    name: '강민혁',
    age: 12
}

FunctionComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string,
}