import "./App.css";
import React, { Component } from "react";
// import Flare from "./animations/Flare";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
        {/* <Flare /> */}
      </div>
    );
  }
}

export default App;
