/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import "./Products.css";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsCartDash, BsWhatsapp } from "react-icons/bs";
import Modal from "../ThankYouModal/ThankYou";
import { CartContext } from "../../CartContext/Context";

const filterCategories = [
  "Type of Plants",
  "Price",
  "Nursery",
  "Ideal Plants Location",
  "Indoor/ Outdoor",
  "Maintenance",
  "Plant Size",
  "Water Schedule",
  "Color",
  "Seasonal",
  "Light Efficient",
];

const products = [
  {
    id: 1,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl:
      "https://i.postimg.cc/Lsp68Whp/e1ce63ff429a0c018fd6e2e5dd614458.png",
  },
  {
    id: 2,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl:
      "https://i.postimg.cc/Lsp68Whp/e1ce63ff429a0c018fd6e2e5dd614458.png",
  },
  {
    id: 3,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl:
      "https://i.postimg.cc/Lsp68Whp/e1ce63ff429a0c018fd6e2e5dd614458.png",
  },
  {
    id: 4,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl: "https://i.postimg.cc/tJw9QS88/7973d62829a030074ad8b6ad34.png",
  },
  {
    id: 5,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl: "https://i.postimg.cc/tJw9QS88/7973d62829a030074ad8b6ad34.png",
  },
  {
    id: 6,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl: "https://i.postimg.cc/tJw9QS88/7973d62829a030074ad8b6ad34.png",
  },
  {
    id: 7,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl:
      "https://i.postimg.cc/bYBytrdL/daa994fdb511faa82ea79a5ef58fbb1a.png",
  },
  {
    id: 8,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl:
      "https://i.postimg.cc/bYBytrdL/daa994fdb511faa82ea79a5ef58fbb1a.png",
  },
  {
    id: 9,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    rating: 4.9,
    originalPrice: 359,
    discountedPrice: 299,
    imageUrl:
      "https://i.postimg.cc/bYBytrdL/daa994fdb511faa82ea79a5ef58fbb1a.png",
  },
  // Add more products with unique IDs and the same image URLs as needed.
];

const Products = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { addToCart } = useContext(CartContext);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className="products-section-main-container">
      <div className="filter-section">
        <div className="filter-sidebar">
          <div className="filter-header">
            <span>Filter</span>
            <button className="clear-btn">CLEAR ALL</button>
          </div>
          <ul className="filter-list">
            {filterCategories.map((category, index) => (
              <li key={index} className="filter-item">
                <span>{category}</span>
                <IoIosAdd className="icon" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="products-section">
        <div className="product-grid">
          <div className="grid-header">
            <span>300 products</span>
            <div className="sort-by">
              SORT BY
              <select>
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid-container">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={product.imageUrl} // Use the image URL from the product object
                    alt={`${product.name} image`}
                  />
                  <AiOutlineHeart className="wishlist-icon" />
                </div>
                <div className="product-details">
                  <button onClick={openModal} className="view-btn">
                    View Product
                  </button>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="rating">
                    <AiFillStar className="star-icon" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="price">
                    <span className="original-price">
                      ₹{product.originalPrice}
                    </span>
                    <span className="discounted-price">
                      ₹{product.discountedPrice}
                    </span>
                  </div>
                  <div className="action-buttons">
                    <button
                      className="add-to-cart"
                      onClick={() => addToCart(product)}
                    >
                      <BsCartDash /> Add to cart
                    </button>
                    <button className="buy-on-rent">Buy on Rent</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <BsWhatsapp className="whatsapp-icon" />
        </div>
      </div>

      <Modal isVisible={isModalVisible} onClose={closeModal} />
    </div>
  );
};

export default Products;
