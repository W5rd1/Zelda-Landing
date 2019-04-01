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
        <ReactCSSTransitionGroup>
          transitionName="flash" transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}><p className="start">Press Enter</p>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
export default App;
