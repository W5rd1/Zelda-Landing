import React from "react";
import Home from "../images/castle.png";
import "./App.css";
import Entrance from "./Entrance";
import Flashtext from "./Flashtext";

class App extends React.Component {
  state = {
    currentBackground: Home,
    currentPage: <Entrance />,
    greeting: "Press Start"
  };

  componentDidMount() {
    window.addEventListener("keyup", event => {
      if (event.key === "Enter") {
        this.setState({
          currentBackground: "https://i.imgur.com/0R00g4N.png"
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp);
  }
  render() {
    return (
      <div
        className="cont"
        style={{ backgroundImage: "url(" + this.state.currentBackground + ")" }}
      >
        {this.state.currentPage}
      </div>
    );
  }
}
export default App;
