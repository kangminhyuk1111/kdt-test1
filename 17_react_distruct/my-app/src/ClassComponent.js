import { Component } from 'react';
import PropsTypes from 'prop-types';

export default class ClassComponent extends Component {
    // 클래스형 컴포넌트 render() 함수 필수
    render() {
        const { name, age } = this.props;
        return (
            <div>
                <h1>hello Component, Class</h1>
                <h2>이름 : {name}</h2>
                <h2>나이 : {age}</h2>
            </div>
        )
    }
};

ClassComponent.defaultProps = {
    name: 'default',
    age: 'default'
}

ClassComponent.propsTypes = {
    name: PropsTypes.string.isRequired,
    age: PropsTypes.string,
}