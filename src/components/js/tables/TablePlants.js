import React from "react";
import { tableSearch } from "./TableSearch";
import "../../css/Table.css";

export default function TablePlants({ data }) {
  return (
    <div>
      <input
        id="input"
        type="text"
        className="search"
        onKeyUp={tableSearch}
        placeholder="Ara.."
      ></input>
      <table id="table" className="table">
        <thead>
          <tr>
            {/* <th>Bitki ID</th> */}
            <th>Adı</th>
            <th>Tür Adı</th>
            <th>Uzunluğu (cm)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m) => {
            return (
              <tr key={m.plantID}>
                {/* <td>{m.plantID}</td> */}
                <td>{m.plantName}</td>
                <td>{m.typeName}</td>
                <td>{m.plantHeight}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
