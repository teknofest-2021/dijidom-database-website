import React, { useEffect } from "react";
import { GetAmbients } from "../../../api/Requests";

function Ambients() {
  useEffect(() => {
    GetAmbients().then((data) => console.log(data));
  });
  return (
    <div>
      <h1>Ortamlar</h1>
    </div>
  );
}

export default Ambients;
