/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../../CartContext/Context";

const Header = ({ openCart }) => {
  const { cartItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className="header-top-section">
        <p>Free Shipping on orders above 999/- </p>
        <p>Call us on : +91 9876805120</p>
      </div>
      <div className="main-header-section">
        <div className="header-logo">
          <img src="https://i.postimg.cc/9MgLVkY5/Group-59.png" alt="Logo" />
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className={isMenuOpen ? "show-menu" : ""}>
          <button className="small-close-btn" onClick={toggleMenu}>
            x
          </button>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#plants-pots">Plants & Pots</a>
          </li>
          <li>
            <a href="#tools">Tools</a>
            <IoIosArrowDown />
          </li>
          <li>
            <a href="#our-services">Our Services</a>
            <IoIosArrowDown />
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#our-story">Our Story</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
        </ul>

        <div className="profile-cart-section">
          <div>
            <CgProfile className="header-logos" />
            <p>My Profile</p>
          </div>
          <div onClick={openCart} className="cart-icon-container">
            <HiOutlineShoppingCart className="header-logos" />
            {cartItems.length > 0 && (
              <span className="cart-item-count">{cartItems.length}</span>
            )}
            <p>Cart</p>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
