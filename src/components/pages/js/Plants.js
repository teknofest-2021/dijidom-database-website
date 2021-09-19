import React, { useEffect, useState } from "react";
import { GetPlants, GetPlantTypes } from "../../../api/Requests";
import "../css/Style.css";
import Table from "../../js/Table";

function Plants() {
  const [plants, setPlants] = useState([]);
  const [plantTypes, setPlantTypes] = useState([]);
  const [plantsLoading, setPlantsLoading] = useState(true);
  const [plantTypesLoading, setPlanTypesLoading] = useState(true);

  useEffect(() => {
    GetPlants().then((data) => {
      setPlants(data);
      setPlantsLoading(false);
    });

    GetPlantTypes().then((data) => {
      setPlantTypes(data);
      setPlanTypesLoading(false);
    });
  }, []);

  const plantTypeColumns = [
    {
      title: "Tür Adı",
      field: "typeName",
      cellStyle: {
        textAlign: "center",
      },
    },
  ];

  const plantColumns = [
    {
      title: "Bitki Adı",
      field: "plantName",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Tür Adı",
      field: "typeName",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Ekilme Tarihi",
      field: "sowingDate",
      cellStyle: {
        textAlign: "center",
      },
    },
  ];

  return (
    <div className="style-container container">
      <Table
          title={"Bitki Türleri"}
          columns={plantTypeColumns}
          datas={plantTypes}
          loading={plantTypesLoading}
          pageSize={4}
        />
      <Table
        title={"Bitkiler"}
        columns={plantColumns}
        datas={plants}
        loading={plantsLoading}
        pageSize={4}
      />
    </div>
  );
}

export default Plants;
