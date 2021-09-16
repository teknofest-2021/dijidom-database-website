import React from "react";
import { RiPlantFill } from "react-icons/ri";
import { IoCloudy } from "react-icons/io5";
import { ImEarth } from "react-icons/im";
import "../css/CardMeasurement.css";

export default function Card({ data }) {
  return (
    <div className="card" key={data.plantID}>
      <div className="card-left">
        <img
          className="image"
          alt="plant"
          src={
            "https://i.pinimg.com/originals/66/8c/2f/668c2f2f20871f6623aa01820977ef92.jpg"
          }
        />
      </div>
      <div className="card-right">
        <div className="card-right-block">
          <div className="card-icon">
            <RiPlantFill size={50} />
            <h3>Bitki</h3>
          </div>
          <div className="card-right-block-column-line" />
          <div className="card-right-block-rows">
            <div className="card-right-block-row">
              <h3>Adı </h3>
              <p>{data.plantName}</p>
            </div>
            <div className="card-right-block-row">
              <h3>Türü </h3>
              <p>{data.typeName}</p>
            </div>
            <div className="card-right-block-row">
              <h3>Boyu </h3>
              <p>{data.plantHeight} cm</p>
            </div>
          </div>
        </div>

        <div className="card-right-block-row-line" />

        <div className="card-right-block">
          <div className="card-icon">
            <IoCloudy size={50} />
            <h3>Ortam</h3>
          </div>
          <div className="card-right-block-column-line" />
          <div className="card-right-block-rows">
            <div className="card-right-block-row">
              <h3>Kalitesi </h3>
              <p>{data.airQuality}</p>
            </div>
            <div className="card-right-block-row">
              <h3>Sıcaklığı </h3>
              <p>{data.airTemperature}°</p>
            </div>
            <div className="card-right-block-row">
              <h3>Nemi </h3>
              <p>{data.airHumidity} g/m^3</p>
            </div>
          </div>
        </div>

        <div className="card-right-block-row-line" />

        <div className="card-right-block">
          <div className="card-icon">
            <ImEarth size={50} />
            <h3>Toprak</h3>
          </div>
          <div className="card-right-block-column-line" />
          <div className="card-right-block-rows">
            <div className="card-right-block-row">
              <h3>Sıcaklığı </h3>
              <p>{data.soilTemperature}°</p>
            </div>
            <div className="card-right-block-row">
              <h3>Nemi </h3>
              <p>{data.soilHumidity} g/m3</p>
            </div>
          </div>
        </div>

        <div className="card-right-block-row-line" />

        <div className="card-right-block">
          <div className="card-right-block-date">
            <h3>{data.createdDate}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
