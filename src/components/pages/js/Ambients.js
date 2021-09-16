import React, { useEffect, useState } from "react";
import { GetAmbients } from "../../../api/Requests";
import TableAmbients from "../../js/tables/TableAmbients.js";
import "../css/Style.css";

function Ambients() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    GetAmbients().then((response) => {
      setDatas(response)
    });
  }, []);
  return (
    <div className="style-container container">
      <h1>Ortamlar</h1>
      {datas && <TableAmbients data={datas} />}
    </div>
  );
}

export default Ambients;
