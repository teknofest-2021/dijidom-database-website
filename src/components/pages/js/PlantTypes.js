import React, { useEffect } from "react";
import { GetPlantTypes } from "../../../api/Requests";

function PlantTypes() {
  useEffect(() => {
    GetPlantTypes().then((data) => console.log(data));
  });
  return (
    <div>
      <h1>Bitki Türleri</h1>
    </div>
  );
}

export default PlantTypes;
