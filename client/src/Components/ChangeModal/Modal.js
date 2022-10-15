import React from 'react';
import { Link } from 'react-router-dom';
import './modal.css';

function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button type="button" onClick={close} className="modal_button">
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  ) : null;
}
export default Modal;
