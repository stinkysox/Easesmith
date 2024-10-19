/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { CartContext } from "../../CartContext/Context";
import "./CartModal.css";
import { MdOutlineStarPurple500 } from "react-icons/md";

const CartModal = ({ isVisible, onClose }) => {
  const { removeFromCart } = useContext(CartContext);
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
          <div className="empty-cart">
            <p>Your cart is empty!</p>
          </div>
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
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>{" "}
                    <button>Save for Later</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="price-details">
              <h3>Price Details</h3>
              <div className="info-container">
                <p>
                  Total Price <span>({cartItems.length} items)</span>
                </p>
                <p>₹{totalPrice}</p>
              </div>
              <div className="info-container">
                <p>Delivery Charges</p>
                <p>₹{deliveryCharge}</p>
              </div>
              <hr />
              <div className="info-container">
                <h3>Total Amount</h3>
                <p>₹{finalTotalPrice}</p>
              </div>
              <hr />
              <p className="savings-text">You will save ₹300 on this order</p>
            </div>

            <div className="may-like">
              <div className="product-card">
                <img
                  src="https://i.postimg.cc/bYBytrdL/daa994fdb511faa82ea79a5ef58fbb1a.png"
                  alt="Money Plant"
                />
                <p className="product-title">Money Plant</p>
                <p className="product-price">
                  Rs. 199 <span className="product-discount">(10% OFF)</span>
                </p>
                <p className="delivery-date">Delivery by 20 Oct</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
              <div className="product-card">
                <img
                  src="https://i.postimg.cc/bYBytrdL/daa994fdb511faa82ea79a5ef58fbb1a.png"
                  alt="Money Plant"
                />
                <p className="product-title">Money Plant</p>
                <p className="product-price">
                  Rs. 199 <span className="product-discount">(10% OFF)</span>
                </p>
                <p className="delivery-date">Delivery by 20 Oct</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
              <div className="product-card">
                <img
                  src="https://i.postimg.cc/bYBytrdL/daa994fdb511faa82ea79a5ef58fbb1a.png"
                  alt="Money Plant"
                />
                <p className="product-title">Money Plant</p>
                <p className="product-price">
                  Rs. 199 <span className="product-discount">(10% OFF)</span>
                </p>
                <p className="delivery-date">Delivery by 20 Oct</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>

            <button className="place-order-btn">Place Order</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
