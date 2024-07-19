import React from "react";

export default function Homee() {
  return (
    <section className="home-section" id="home">
      <div className="home-sec1">
        <h1 className="h1-1">
          Welcome to The <span className="span-1">OurWebsite</span> Your
          Platform for Launching Towards Technological Success!
        </h1>
      </div>
      <div className="home-paragraph">
        <p className="p-1">
          At The OurWebsite, we are dedicated to helping you excel in the world
          of technology.
        </p>
        <p className="p-2">
          Our services are specifically designed to meet your needs
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h4 className="h4-card1">Coworking Spaces</h4>
          <p className="par1-card1">
            Inspiring Work Environments Designed for Technological Innovation
          </p>
          <p className="par2-card1">Learn more</p>
        </div>

        <div className="card">
          <h4 className="h4-card1">Mentoring and Training</h4>
          <p className="par1-card1">
            Gain Insights from Industry Experts to Boost Your Success
          </p>
          <p className="par2-card1">Learn more </p>
        </div>
        <div className="card">
          <h4 className="h4-card1">Access to Funding and Markets</h4>
          <p className="par1-card1">
            Unlock Financing Opportunities and Expand Your Impact
          </p>
          <p className="par2-card1">Learn more</p>
        </div>
        <div className="card">
          <h4 className="h4-card1">Networking Opportunities</h4>
          <p className="par1-card1">
            Connect with like-minded technology enthusiasts and industry leaders
          </p>
          <p className="par2-card1">Learn more</p>
        </div>
      </div>
      <div class="parent-container">
        <div className="home-last-sec">
          <img
            className="img-home-1"
            src="/images/merwas-home-sec.png"
            alt="image-web"
          />
          <p className="par-home-1">
            OurWebsite Your Gateway to Technological Excellence. Get a quick
            glimpse into the dynamic environment at The{" "}
            <span className="span-2">OurWebsite</span> and the benefits that
            await you.
          </p>
        </div>
      </div>
    </section>
  );
}
