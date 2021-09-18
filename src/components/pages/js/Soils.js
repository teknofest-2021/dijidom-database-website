import React, { useEffect, useState } from "react";
import { GetSoils } from "../../../api/Requests";
import "../css/Style.css";
import Table from "../../js/Table";

function Soils() {
  const [soils, setSoils] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetSoils().then((data) => {
      setSoils(data);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "Bitki Adı",
      field: "plantName",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Toprak Sıcaklığı (°)",
      field: "soilTemperature",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Toprak Nem Oranı (%)",
      field: "soilHumidity",
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
      <Table
        title={"Topraklar"}
        columns={columns}
        datas={soils}
        loading={loading}
        pageSize={10}
      />
    </div>
  );
}

export default Soils;
