import React, { Component } from "react";

export default class Handler_ex extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello World!",
    };
  }
  render() {
    const { text } = this.state;
    return (
      <>
        <h1>{text}</h1>
        <button onClick={() => this.setState({ text: "GoodBye World!" })}>
          클릭
        </button>
      </>
    );
  }
}
