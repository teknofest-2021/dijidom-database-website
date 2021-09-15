import React, { useEffect } from "react";
import {
  GetAllMeasurementByPlantID,
  GetLastMeasurement,
} from "../../../api/Requests";

function Home() {
  useEffect(() => {
    GetLastMeasurement().then((data) => console.log(data));
    GetAllMeasurementByPlantID(1).then((data) => console.log(data));
  });

  return (
    <div>
      <h1>Ana Sayfa</h1>
    </div>
  );
}

export default Home;
