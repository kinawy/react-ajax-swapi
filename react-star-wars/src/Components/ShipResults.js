import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StarShip from "./StarShip";

const ShipResults = (props) => {
  console.log(props.ships);
  let newShips = props.ships.map((s, i) => {
    return (
      <div key={i} className="Ship">
        <h1>{s.name}</h1>
        <button>
          <Link to='/ship' ship={s}>View More Info</Link>
        </button>
      </div>
    );
  });

  return (
    <Router>
      {newShips}
    </Router>
  );
};

export default ShipResults;
