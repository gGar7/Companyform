// src/CompanyForm.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Form.css";

const CompanyForm = () => {
  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="form-title">Gautam Agarwal Private Limited</h2>
      <form className="form-content">
        <div className="form-section">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your full name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Your email address" />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Your phone number" />
        </div>

        <div className="form-section">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Write your message"></textarea>
        </div>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CompanyForm;
