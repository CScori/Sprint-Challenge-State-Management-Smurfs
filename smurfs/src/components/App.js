import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> The Smurfs!</h1>
        <AddSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
