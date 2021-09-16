import React from "react";
import { tableSearch } from "./TableSearch";
import "../../css/Table.css";

export default function TableSoils({ data }) {
  return (
    <div>
      <input
        id="input"
        type="text"
        className="search"
        onKeyUp={() => tableSearch(0)}
        placeholder="Ara.."
      ></input>
      <table id="table" className="table">
        <thead>
          <tr>
            {/* <th>Toprak ID</th> */}
            <th>Sıcaklığı (°)</th>
            <th>Nemi (g/m^3)</th>
            <th>Ölçüm Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m) => {
            return (
              <tr key={m.soilID}>
                {/* <td>{m.soilID}</td> */}
                <td>{m.soilTemperature}</td>
                <td>{m.soilHumidity}</td>
                <td>{m.createdDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
