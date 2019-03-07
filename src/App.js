import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Top from "./AirbusComponents/top";
import Left from "./AirbusComponents/left";
import Main from "./AirbusComponents/main";
class App extends Component {
  state = {
    screen: "home",
    message: "Home Screen"
  };
  handleChange = value => {
    let screen = this.state.screen;
    if (screen !== value) {
      let message = this.state.message;
      screen = value;
      message = value;
      this.setState({ screen, message });
    }
  };

  handleSave = () => {
    let flight = {};

    flight.ms = document.getElementById("ms").value;
    flight.hl = parseInt(document.getElementById("hl").value);
    flight.gw = parseInt(document.getElementById("gw").value);
    flight.ap = parseInt(document.getElementById("ap").value);
    flight.rt = parseInt(document.getElementById("rt").value);
    flight.airport = parseInt(document.getElementById("airport").value);
    flight.cl = parseInt(document.getElementById("cl").value);
    flight.cr = parseInt(document.getElementById("cr").value);
    flight.ql = parseInt(document.getElementById("ql").value);
    flight.qr = parseInt(document.getElementById("qr").value);
    flight.fn = document.getElementById("fn").value;
    const url = "http://localhost:7015/flight/";
    this.postData(url, flight);
  };
  postData = (url = ``, data = {}) => {
    // Default options are marked with *
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        let message = this.state.message;
        message = "sucessfully added with id " + data.id;
        this.setState({ message });
      });
  };
  render() {
    return (
      <React.Fragment>
        <Top message={this.state.message} />
        <Main screen={this.state.screen} save={this.handleSave} />
        <Left onClick={this.handleChange} />
      </React.Fragment>
    );
  }
}
export default App;
