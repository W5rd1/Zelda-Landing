import React from "react";
import Home from "../images/castle.png";
import "./App.css";

class App extends React.Component {
  state = {
    currentBackground: Home
  };

  componentDidMount() {
    window.addEventListener("keyup", event => {
      if (event.key === "Enter") {
        console.log(event);
        this.setState({ currentBackground: "https://i.imgur.com/0R00g4N.png" });
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
        <p className="start">Press Enter</p>
      </div>
    );
  }
}
export default App;
