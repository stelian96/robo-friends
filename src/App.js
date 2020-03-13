import React, { Component } from "react";
import CardBox from "./components/CardBox";
import SearchBox from "./components/SearchBox";
import { robots } from "./robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    };
  }
  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filteredArray = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardBox robots={filteredArray} />
      </div>
    );
  }
}
export default App;
