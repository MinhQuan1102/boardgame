import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { isModalOpen, closeModal, modalMsg} = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
      onClick={closeModal}
    >
      <div className="modal-container">
        <h3>{modalMsg}</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
