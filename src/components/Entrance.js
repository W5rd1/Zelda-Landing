import React from "react";
import Background from "../images/castle.png";
import "./entrance.css";

var ImageStyle = {
  height: "100vh",
  width: "100vw",
  position: "absoloute"
};

const Entrance = () => {
  return <img src={Background} style={ImageStyle} />;
};
export default Entrance;
