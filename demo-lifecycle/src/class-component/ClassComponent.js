import React, { Component } from "react";
import FunctionComponent from "../function-component/FunctionComponent";

export class ClassComponent extends Component {
  // Phase Mounting
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = { data: "Initial Data" };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps");
    console.log("nextProps", nextProps);
    console.log("nextProps", nextState);
    return null;
  }

  componentDidMount() {
    /* Su dung fetch data tu API, thuc hien cac hoat dong cleanup, ket noi voi cac thu vien ben ngoai*/
    console.log("componentDidMount");
  }

  // Phase Updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  // Phase Unmounting
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // Phase Error Handling
  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }

  // Render phải được triển khai
  render() {
    console.log("Render");
    return (
      <div>
        {/* <FunctionComponent /> */}
        {this.state.data}
      </div>
    );
  }
}

export default ClassComponent;
