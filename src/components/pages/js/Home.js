import React, { useEffect, useState } from "react";
import {
  GetAllMeasurementByPlantID,
  GetLastMeasurement,
} from "../../../api/Requests";
import "../css/Style.css";
import CardMeasurement from "../../js/CardMeasurement";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

function Home() {
  const [measurements, setMeasurements] = useState([]);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

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
              <div key={m.plantID} onClick={() => Toggle()}>
                <CardMeasurement data={m} />
              </div>
            );
          })}
      </div>
      {/* <div style={{ width: "100%", height: "500px" }}>
        <ResponsiveContainer width="90%" height="100%">
          <LineChart margin={{ top: 50 }} data={measurements}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="measurementDate" fillOpacity={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              name="Hava Kalitesi"
              dataKey="airQuality"
              stroke="blue"
            />
            <Line
              type="monotone"
              name="Hava Sıcaklığı (°C)"
              dataKey="airTemperature"
              stroke="red"
            />
            <Line
              type="monotone"
              name="Hava Nemi (%)"
              dataKey="airHumidity"
              stroke="#95FF50"
            />
            <Line
              type="monotone"
              name="Toprak Sıcaklığı (°C)"
              dataKey="soilTemperature"
              stroke="orange"
            />
            <Line
              type="monotone"
              name="Toprak Nemi (%)"
              dataKey="soilHumidity"
              stroke="#9DC0FF"
            />
          </LineChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
}

export default Home;
