import React from "react";
import "./Entrance.css";
import Flashtext from "./Flashtext";

class Entrance extends React.Component {
  render() {
    return (
      <div className="info">
        <div className="title">
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
        </div>
        <Flashtext greeting={this.props.greeting} />
      </div>
    );
  }
}

export default Entrance;
