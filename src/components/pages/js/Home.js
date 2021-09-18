import React, { useEffect, useState } from "react";
import {
  GetAllMeasurementByPlantID,
  GetLastMeasurement,
} from "../../../api/Requests";
import "../css/Style.css";
import CardMeasurement from "../../js/CardMeasurement";
import GraphModal from "../../js/GraphModal";

function Home() {
  const [measurements, setMeasurements] = useState([]);
  const [plantID, setPlantID] = useState(0);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    GetLastMeasurement().then((response) => {
      setMeasurements(response);
    });
  }, []);

  return (
    <div className="style-container container">
      <div className="items-container">
        {measurements &&
          measurements.map((m) => {
            return (
              <div
                key={m.plantID}
                onClick={() => {
                  toggle();
                  setPlantID(m.plantID);
                }}
              >
                <CardMeasurement data={m} />
              </div>
            );
          })}
      </div>
      {modal && <GraphModal modal={modal} id={plantID} toggle={toggle} />}
    </div>
  );
}

export default Home;
