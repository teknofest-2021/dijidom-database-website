import React, { useEffect, useState } from "react";
import { GetSoils } from "../../../api/Requests";
import TableSoils from "../../js/tables/TableSoils";
import "../css/Style.css";

function Soils() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    GetSoils().then((data) => setDatas(data));
  }, []);
  return (
    <div className="style-container container">
      <h1>Topraklar</h1>
      {datas && <TableSoils data={datas} />}
    </div>
  );
}

export default Soils;
