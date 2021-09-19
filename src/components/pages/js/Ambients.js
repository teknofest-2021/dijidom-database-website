import React, { useEffect, useState } from "react";
import { GetAmbients } from "../../../api/Requests";
import "../css/Style.css";
import Table from "../../js/Table";

function Ambients() {
  const [ambients, setAmbients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetAmbients().then((response) => {
      setAmbients(response);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "Hava Kalitesi (g/m^3)",
      field: "airQuality",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Hava Sıcaklığı (°C)",
      field: "airTemperature",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Hava Nem Oranı (%)",
      field: "airHumidity",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Ölçüm Tarihi",
      field: "measurementDate",
      cellStyle: {
        textAlign: "center",
      },
    },
  ];

  return (
    <div className="style-container container">
      <Table title={"Ortamlar"} columns={columns} datas={ambients} loading={loading} pageSize={10} />
    </div>
  );
}

export default Ambients;
