import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PilotList from './PilotList'

const StarShip = (props) => {
  let starShip = props.location.state;
  let starShipPilots = starShip.pilots

  return (
    <div className="StarshipColumn">
        <div className="StarShip">
      <h1>{starShip.name}</h1>
      <PilotList pilots={starShipPilots}/>
      <h2>{starShip.model}</h2>

      <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default StarShip;
