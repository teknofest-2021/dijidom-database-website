import React, { useEffect, useState } from "react";
import { GetPlants } from "../../../api/Requests";
import TablePlants from "../../js/tables/TablePlants";
import "../css/Style.css";

function Plants() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    GetPlants().then((data) => setDatas(data));
  }, []);
  return (
    <div className="style-container container">
      <h1>Bitkiler</h1>
      <div className="btn">
        Bitki Türleri
      </div>
      {datas && <TablePlants data={datas} />}
    </div>
  );
}

export default Plants;
