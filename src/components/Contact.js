import React from "react";
import { AspectRatio } from "@chakra-ui/react";
export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-sec1">
        <h1 className="h1-contact">Contact Us</h1>
        <p className="p1-contact">
          With lots of unique blocks, you can easily build a page easily without
          any coding.
        </p>
        <h2 className="h2-contact">Get in touch today!</h2>
      </div>

      <div className="info-form-container">
        <div className="contact-info">
          <h3 className="h3-info">Contact details</h3>
          <div className="contact-card">
            <h4>Find Us</h4>
            <p className="contact-card-text">2301 AMMAN . JORDAN</p>
          </div>
          <div className="contact-card">
            <h4>Working Hours</h4>
            <p className="contact-card-text">Mon-Fri: 8 AM - 5 PM</p>
            <p className="contact-card-text"> Sat-Sun: 8 AM - 2 PM</p>
          </div>
          <div className="contact-card">
            <h4>Follow Us</h4>
            <p className="contact-card-text">some icons here</p>
          </div>
          <div className="contact-card">
            <h4>Phone</h4>
            <p className="contact-card-text">+ (06) 111-1111</p>
            <p className="contact-card-text">+ (06) 111-1111</p>
          </div>
          <div className="contact-card">
            <h4>Write to Us</h4>
            <p className="contact-card-text">info@ourwebsite.com</p>
            <p className="contact-card-text">courses@ourwebsite.com5</p>
          </div>
        </div>

        <div className="contact-form">
          <h3 className="h3-form">Have a question?</h3>

          <form>
            <label htmlFor="name">Types:</label>
            <input type="text" id="type" name="type" />
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <AspectRatio ratio={16 / 9}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
      </AspectRatio>
    </section>
  );
}
