import React, { useState, useEffect } from "react";
import Modal from "react-modal";
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
import { GetAllMeasurementByPlantID } from "../../api/Requests";

export default function GraphModal({ modal, toggle, id }) {
  const [measurements, setMeasurements] = useState([]);
  useEffect(() => {
    GetAllMeasurementByPlantID(id).then((data) => setMeasurements(data));
  }, []);
  return (
    <div>
      <Modal
        isOpen={modal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          overlay: {
            position: "absolute",
            top: "10%",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(25, 25, 25, .3)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div onClick={toggle}>
          Kapat
        </div>
        <ResponsiveContainer width="100%" height="100%">
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
            <Line
              type="monotone"
              name="Bitki Boyu (cm)"
              dataKey="plantHeight"
              stroke="#B900A2"
            />
          </LineChart>
        </ResponsiveContainer>
      </Modal>
    </div>
  );
}
