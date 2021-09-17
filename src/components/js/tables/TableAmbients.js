import React from "react";
import { tableSearch } from "./TableSearch";
import "../../css/Table.css";

export default function TableAmbients({ data }) {
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
            {/* <th>Ortam ID</th> */}
            <th>Hava Kalitesi</th>
            <th>Hava Sıcaklığı (°)</th>
            <th>Hava Nemi (g/m^3)</th>
            <th>Ölçüm Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m) => {
            return (
              <tr key={m.ambientID}>
                {/* <td>{m.ambientID}</td> */}
                <td>{m.airQuality}</td>
                <td>{m.airTemperature}</td>
                <td>{m.airHumidity}</td>
                <td>{m.measurementDate.slice(0, 19).replace('T', ' ')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
