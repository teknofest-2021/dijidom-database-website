import React, { useEffect, useState } from "react";
import {
  GetAllMeasurementByPlantID,
  GetLastMeasurement,
} from "../../../api/Requests";
import "../css/Style.css";
import CardMeasurement from "../../js/CardMeasurement";

function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    GetLastMeasurement().then((response) => {
      setDatas(response);
    });
  }, []);

  const getData = (id) => {
    GetAllMeasurementByPlantID(id).then((data) => console.log(data));
  };

  return (
    <div className="style-container container">
      <h1>Ana Sayfa</h1>
      {datas &&
        datas.map((m) => {
          return (
            <div key={m.plantID} onClick={() => getData(m.plantID)}>
              <CardMeasurement data={m} />
            </div>
          );
        })}
    </div>
  );
}

export default Home;
