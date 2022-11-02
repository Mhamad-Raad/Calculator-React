import React from 'react';
import ReactDOM from 'react-dom';
import './MobileNav.css';
import PropTypes from 'prop-types';

function Backdrop() {
  return <div className="bg" />;
}

function ModalOverlay({ children }) {
  return (
    <div className="modal">
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

function Modal({ children }) {
  const portalElement = document.getElementById('overlays');

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
