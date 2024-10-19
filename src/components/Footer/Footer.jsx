import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="footer-container">
        <motion.div className="newsletter-section" variants={childVariants}>
          <h3>Subscribe to Our Newsletter</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet. Aut Ipsum Illum Et Nostrum Quidem Aut
            Necesbas Enim
          </p>
          <form>
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </motion.div>
        <motion.div className="footer-links" variants={childVariants}>
          <div className="about-section">
            <h4>About Us</h4>
            <ul>
              <li>Our Story</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div className="services-section">
            <h4>Our Services</h4>
            <ul>
              <li>Book Maali</li>
              <li>Plant Day Care</li>
              <li>Rent Plants</li>
              <li>Plants & Pots</li>
              <li>Gardening Tools</li>
            </ul>
          </div>

          <div className="useful-links-section">
            <h4>Useful Links</h4>
            <ul>
              <li>My Account</li>
              <li>Orders & Returns</li>
              <li>Track Order</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Return, Refund & Replacement Policy</li>
            </ul>
          </div>

          <div className="contact-section">
            <h4>Get In Touch</h4>
            <address>
              Address: F-262, First Floor, Sushant Lok Phase-III,
              <br />
              Sector-57, Gurgaon, Haryana, India 122003
              <br />
              Call: +919958287272
              <br />
              Email: care@chaperoneplants.com
            </address>
          </div>
        </motion.div>

        <motion.div className="footer-bottom" variants={childVariants}>
          <p>© 2023, chaperone.com All rights reserved.</p>
          <motion.div className="social-media-icons">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
