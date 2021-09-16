import React, { useEffect, useState } from "react";
import { GetPlants, GetPlantTypes } from "../../../api/Requests";
import TablePlants from "../../js/tables/TablePlants";
import "../css/Style.css";
import Modal from "../../js/ModalPlantTypes";

function Plants() {
  const [datas, setDatas] = useState([]);
  const [datasType, setDatasType] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    GetPlants().then((data) => setDatas(data));
    GetPlantTypes().then((data) => setDatasType(data));
  }, []);

  return (
    <div className="style-container container">
      <h1>Bitkiler</h1>
      <div
        className="btn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Bitki Türleri
      </div>
      {datas && <TablePlants data={datas} />}
      {modalOpen && <Modal setOpenModal={setModalOpen} types={datasType} />}
    </div>
  );
}

export default Plants;
