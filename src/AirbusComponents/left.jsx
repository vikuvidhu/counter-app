import React, { Component } from "react";
class Left extends Component {
  style = {
    marginLeft: "20%",
    width: 200,
    height: 300,
    display: "inline-block"
  };
  render() {
    return (
      <div style={{ float: "left", width: 100, marginLeft: "20%" }}>
        <button
          onClick={() => this.props.onClick("home")}
          className="btn btn-light m-4"
        >
          Home
        </button>
        <button
          className="btn btn-light m-4"
          onClick={() => this.props.onClick("A320")}
        >
          A320
        </button>
        <button
          className="btn btn-light m-4"
          onClick={() => this.props.onClick("A330")}
        >
          A330
        </button>
        <button
          className="btn btn-light m-4"
          onClick={() => this.props.onClick("A350")}
        >
          A350
        </button>
        <button
          className="btn btn-light m-4"
          onClick={() => this.props.onClick("searchAndFilter")}
        >
          SearchAndFilter
        </button>
      </div>
    );
  }
}

export default Left;
