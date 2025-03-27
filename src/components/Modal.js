
import React from 'react';
import './Modal.css'; 

const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
