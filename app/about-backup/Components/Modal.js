import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
      >
        <button className="close-btn text-[100px] text-white" onClick={onClose}>
          X
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
