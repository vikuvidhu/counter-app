import React, { Component } from "react";
import Flight from "./flight";
import Home from "./home";
import SearchAndFilter from "./searchAndFilter";
class Main extends Component {
  renderTages = () => {
    const { screen } = this.props;
    if (screen === "A320" || screen === "A330" || screen === "A350")
      return <Flight onSave={this.props.save} />;
    if (screen === "home") return <Home />;
    if (screen === "searchAndFilter")
      return <SearchAndFilter search={this.props.onSearch} />;
  };
  style = { marginLeft: "40%", marginTop: "0%", marginRight: 300 };
  render() {
    return (
      <div style={{ float: "right", marginRight: "30%", marginTop: 10 }}>
        {this.renderTages()}
      </div>
    );
  }
}

export default Main;
