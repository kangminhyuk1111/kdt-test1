import React, { Component } from 'react'
import PropsTypes from 'prop-types';

export default class ClassEx extends Component {
    render() {
        const { text, valid } = this.props;
        return (
            <div>
                <h1>{text}</h1>
                <button onClick={valid}>클릭!</button>
            </div>
        )
    }
}

ClassEx.defaultProps = {
    text: '이건 기본 text props입니다.'
}

ClassEx.propsTypes = {
    text: PropsTypes.string.isRequired,
}
