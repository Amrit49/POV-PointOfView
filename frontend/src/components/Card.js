import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.thumbnail} className="card-img-top menuu" alt="ima" />
      <div className="card-body">
        <img src={props.channel} className="channel" alt="channel" />
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;