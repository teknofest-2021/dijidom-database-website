import React, { useEffect } from "react";
import { GetPlants } from "../../../api/Requests";

function Plants() {
  useEffect(() => {
    GetPlants().then((data) => console.log(data));
  });
  return (
    <div>
      <h1>Bitkiler</h1>
    </div>
  );
}

export default Plants;
