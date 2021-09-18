import React, { useEffect, useState } from "react";
import {
  GetAllMeasurementByPlantID,
  GetLastMeasurement,
} from "../../../api/Requests";
import "../css/Style.css";
import CardMeasurement from "../../js/CardMeasurement";

function Home() {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    GetLastMeasurement().then((response) => {
      setMeasurements(response);
    });
  }, []);

  // const getData = (id) => {
  //   GetAllMeasurementByPlantID(id).then((data) => console.log(data));
  // };

  return (
    <div className="style-container container">
      {measurements &&
        measurements.map((m) => {
          return (
            <div key={m.plantID}>
              <CardMeasurement data={m} />
            </div>
          );
        })}
    </div>
  );
}

export default Home;
