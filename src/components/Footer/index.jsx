import "./index.scss";

import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/haneulee"
      >
        <p className="footer-contents">
          <span className="icon">&copy; 2021</span> haneulee
        </p>
      </a>
    </div>
  );
};

export default Footer;
