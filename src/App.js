import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component'
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchInput: '',
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {monsters, searchInput} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monster Pokedex </h1>
        <SearchBox placeholder = 'seach monsters' handleChange = {this.handleChange} />
        <CardList monsters = {filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
