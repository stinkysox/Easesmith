/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { CartContext } from "../../CartContext/Context";
import "./CartModal.css";
import { MdOutlineStarPurple500 } from "react-icons/md";

const CartModal = ({ isVisible, onClose }) => {
  const { cartItems } = useContext(CartContext);

  if (!isVisible) return null;

  const deliveryCharge = 50;
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );
  const finalTotalPrice = totalPrice + deliveryCharge;

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="image-container">
                  <img src={item.imageUrl} alt={item.name} />
                  <div>
                    <p>{`Qty: ${item.quantity}`}</p>
                  </div>
                </div>

                <div>
                  <p>{item.name}</p>
                  <p>Size: Small</p>
                  <div className="stars">
                    <MdOutlineStarPurple500 className="star" />
                    <MdOutlineStarPurple500 className="star" />
                    <MdOutlineStarPurple500 className="star" />
                    <MdOutlineStarPurple500 className="star" />
                    <span>(31)</span>
                  </div>
                  <div className="paras-container">
                    <p className="discounted-price">₹{item.discountedPrice}</p>
                    <p>₹{item.originalPrice}</p>
                    <p>(20% OFF)</p>
                  </div>

                  <div className="delivery-info">
                    <p>
                      Delivery by <span>Tue, Oct 05 </span>
                      <span>| FREE DELIVERY</span>
                    </p>
                  </div>
                  <div className="action-button">
                    <button>Remove</button>
                    <button>Save for Later</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="price-details">
              <h3>Price Details</h3>
              <p>Total Price: ₹{totalPrice}</p>
              <p>Delivery Charges: ₹{deliveryCharge}</p>
              <h3>Total Amount: ₹{finalTotalPrice}</h3>
            </div>

            <button className="place-order-btn">Place Order</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
