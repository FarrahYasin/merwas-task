import React from "react";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-sec1">
          <h1 className="h1-about">About Us</h1>
          <p className="p1-about">
            With lots of unique blocks, you can easily build a page easily
            without any coding.
          </p>
        </div>
        <h4 className="h4-about-1">
          <span className="about-span">OurWebsite</span> We offer more than just
          a workspace
        </h4>
        <div className="img-cards-container">
          <div className="about-cards">
            <div className="about-card">
              <h5 className="h5-1-card-about">Fostering Collaboration</h5>
              <p className="p1-card-about">
                Encouraging synergy among different entities in the technology
                ecosystem, includingstartups,freelancers,compaes, academia, and
                government
              </p>
            </div>
            <div className="about-card">
              <h4 className="h5-1-card-about">Promoting Innovation</h4>
              <p className="p1-card-about">
                By providing support and guidance/training, the center aims to
                cultivate an environment where new ideas and innovative
                solutions can thrive
              </p>
            </div>
            <div className="about-card">
              <h4 className="h5-1-card-about"> Mission Statement</h4>
              <p className="p1-card-about">
                A technological revolution in East amman through fostering
                innovation, collaboration, education, and community growth
              </p>
            </div>
            <div className="about-card">
              <h4 className="h5-1-card-about">Vision Statement</h4>
              <p className="p1-card-about">
                Establishing a leading technological hub as a catalyst for
                technological advancement and social development in East amman
              </p>
            </div>
          </div>
          <img
            className="img-about-1"
            src="/images/merwas-about-page.png"
            alt="image-aboutus-web"
          />
        </div>
      </div>
    </section>
  );
}
