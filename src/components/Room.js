import React from "react";
import "./Room.css";

class Room extends React.Component {
  render() {
    return (
      <div
        className="room-container"
        style={{ backgroundImage: "url(" + this.props.bg + ")" }}
      >
        <h1>{this.props.header}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Room;
