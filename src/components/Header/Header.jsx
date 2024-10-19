/* eslint-disable react/prop-types */
import React from "react";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Header = ({ openCart }) => {
  return (
    <nav>
      <div className="header-top-section">
        <p>Free Shipping on orders above 999/- </p>
        <p>Call us on : +91 9876805120</p>
      </div>
      <div className="main-header-section">
        <div className="header-logo">
          <img src="https://i.postimg.cc/9MgLVkY5/Group-59.png" alt="" />
        </div>
        <ul>
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
          <div onClick={openCart}>
            <HiOutlineShoppingCart className="header-logos" />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
