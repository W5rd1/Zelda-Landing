import React from "react";
import Home from "../images/castle.png";
import "./App.css";
import Entrance from "./Entrance";
import Room from "./Room";

class App extends React.Component {
  state = {
    currentBackground: Home,
    title: "Michael Eldred",
    subtitle: "Full-stack Web Developer",
    greeting: "Press Start",
    phase: 1,
    header: "About Me",
    content: "This is the about me section",
    bg:
      "https://nowplayable.com/wp-content/uploads/2019/02/Path-of-Exile-The-Shaper-Map-Device.jpg"
  };

  componentDidMount() {
    window.addEventListener("keyup", event => {
      console.log(event.key);
      switch (event.key) {
        case "Enter":
          return this.setState({
            currentBackground: "https://i.imgur.com/wQP3qpD.png",
            greeting: "1, 2, 3, 4 or 5",
            title: "",
            subtitle: ""
          });
        case "1":
          return this.setState({ phase: 2 });
        case "2":
          return this.setState({ phase: 2 });
        case "3":
          return this.setState({ phase: 2 });
        case "4":
          return this.setState({ phase: 2 });
        case "5":
          return this.setState({ phase: 2 });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp);
  }
  render() {
    if (this.state.phase === 1) {
      return (
        <div
          className="cont"
          style={{
            backgroundImage: "url(" + this.state.currentBackground + ")"
          }}
        >
          <Entrance
            title={this.state.title}
            greeting={this.state.greeting}
            subtitle={this.state.subtitle}
          />
        </div>
      );
    } else {
      return (
        <Room
          header={this.state.header}
          content={this.state.content}
          bg={this.state.bg}
        />
      );
    }
  }
}
export default App;
