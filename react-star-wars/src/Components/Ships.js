import React, { useState, useEffect } from "react";
import axios from "axios";

import ShipResults from "./ShipResults";

const Ships = (props) => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    let url = "https://swapi.dev/api/starships/";
    axios
      .get(url)
      .then((res) => {
        setShips(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ShipResults ships={ships} />
    </div>
  );
};

export default Ships;