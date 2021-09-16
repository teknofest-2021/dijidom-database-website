import React from "react";
import "../css/ModalPlantTypes.css";

function Modal({ setOpenModal, types }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-close-btn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Bitki Türleri</h1>
          <div className="modal-column-line"/>
          {types.map((m) => {
            return <p key={m.typeID}>{m.typeName}</p>;
          })}
        </div>
        <div className="body"></div>
      </div>
    </div>
  );
}

export default Modal;
