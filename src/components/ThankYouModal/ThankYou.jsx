/* eslint-disable react/prop-types */
import React from "react";
import "./ThankYou.css";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <p>Your Cart</p>
        <hr />
        <br />
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Congratulations, Order Placed!</h2>

        <br />

        <div className="logo-continue">
          <img
            src="https://i.postimg.cc/JzB5LsHF/plant-1.png"
            alt=""
            className="thanks-img"
          />
          <p>
            Thank you for choosing Chaperone services. We will soon get in touch
            with you!
          </p>
          <button className="continue-shopping-btn" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
