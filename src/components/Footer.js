import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Subscribe to our newsletter</h3>
          <p>
            Your download should start automatically, if not Click here. Should
            I give up, huh?
          </p>
          <input type="text" name="text" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright © 2024 OurWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
