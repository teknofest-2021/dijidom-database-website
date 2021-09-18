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
      title: "Kalitesi",
      field: "airQuality",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Sıcaklığı (°)",
      field: "airTemperature",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Nem Oranı (%)",
      field: "airHumidity",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Ölçüm Tarihi",
      field: "measurementDate",
      type: "datetime",
      cellStyle: {
        textAlign: "center",
      },
      dateSetting: { locale: "tr-TR" },
    },
  ];

  return (
    <div className="style-container container">
      <Table title={"Ortamlar"} columns={columns} datas={ambients} loading={loading} pageSize={10} />
    </div>
  );
}

export default Ambients;
