import React, { Component } from 'react'


export default class ClassComponent extends Component {
    state = {
        counter : 0,
    }
    up = () => {
        this.setState({counter: this.state.counter + 2 })
    }
    down = () => {
        this.setState({counter : this.state.counter - 1 });
    }
    render() {
        const {counter} = this.state;
        return (
        <div>
            <h2>{counter}</h2>
            <button onClick={this.up}>+2</button>
            <button onClick={this.down}>-1</button>
        </div>
        )
    }
}
