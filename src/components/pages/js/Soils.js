import React, { useEffect } from "react";
import { GetSoils } from "../../../api/Requests";

function Soils() {
  useEffect(() => {
    GetSoils().then((data) => console.log(data));
  });
  return (
    <div>
      <h1>Topraklar</h1>
    </div>
  );
}

export default Soils;
