import React from "react";

export default function Partners() {
  return (
    <section className="partners-section" id="partners">
      <h1 className="h1-partners">Partners</h1>
      <p className="p1-partners">
        With lots of unique blocks, you can easily build a page easily without
        any coding.
      </p>
      <div className="partners-cards">
        <div className="partner-card">
          <img
            src="/images/merwas-partner.png"
            alt="Partner 1"
            className="card-image"
          />
          <p className="card-text">Agreement between xyz and ourwebsite</p>
          <div className="card-rectangle"></div>
        </div>
        <div className="partner-card">
          <img
            src="/images/merwas-partner.png"
            alt="Partner 2"
            className="card-image"
          />
          <p className="card-text">Agreement between xyz and ourwebsite</p>
          <div className="card-rectangle"></div>
        </div>
        <div className="partner-card">
          <img
            src="/images/merwas-partner.png"
            alt="Partner 3"
            className="card-image"
          />
          <p className="card-text">Agreement between xyz and ourwebsite</p>
          <div className="card-rectangle"></div>
        </div>
      </div>
    </section>
  );
}
