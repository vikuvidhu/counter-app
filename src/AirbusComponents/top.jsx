import React, { Component } from "react";

class Top extends Component {
  state = {};
  styleDiv = {
    marginLeft: "20%",
    marginTop: 10,
    marginRight: "20%",
    height: 100
  };

  render() {
    return (
      <div style={this.styleDiv}>
        <span
          style={{ height: 100, width: 800, fontSize: 30 }}
          className="badge badge-info"
        >
          {this.props.message}
        </span>
      </div>
    );
  }
}

export default Top;
