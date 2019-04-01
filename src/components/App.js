import React from "react";
import Home from "../images/castle.png";
import "./App.css";
import { CSSTransitionGroup } from "react-transition-group";
class App extends React.Component {
  state = {
    currentBackground: Home
  };

  render() {
    return (
      <div
        className="cont"
        style={{ backgroundImage: "url(" + this.state.currentBackground + ")" }}
      >
        {/* <CSSTransitionGroup
          transitionName="flash"
          transitionAppear={true}
          transitionAppearInterval={500}
          transitionEnter={false}
          transitionLeave={true}
        > */}
        <p className="start">Press Enter</p>
        {/* </CSSTransitionGroup> */}
      </div>
    );
  }
}
export default App;
