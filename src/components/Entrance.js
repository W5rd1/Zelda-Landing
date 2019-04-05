import React from "react";
import "./Entrance.css";
import Flashtext from "./Flashtext";

class Entrance extends React.Component {
  render() {
    return (
      <div className="info">
        <div className="title">
          <h1>Michael Eldred</h1>
          <p>Full-Stack Web Developer</p>
        </div>
        <Flashtext />
      </div>
    );
  }
}

export default Entrance;
