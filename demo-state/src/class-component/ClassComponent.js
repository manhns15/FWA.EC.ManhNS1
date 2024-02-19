import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // Thay doi state
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  resetCount = () =>{
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Count</button>&nbsp;
        <button onClick={this.resetCount}>Count</button>
      </div>
    );
  }
}

export default ClassComponent;
