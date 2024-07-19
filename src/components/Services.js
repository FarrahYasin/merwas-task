import React from 'react'

export default function Services() {
  return (
    <section className="service-section">
        <div className="services-sec1">
          <h1 className="h1-services">Services</h1>
          <p className="p1-services">
            With lots of unique blocks, you can easily build a page easily
            without any coding.
          </p>
        </div>
        <div className="services-sec2">
          <div className="img-services">
            <img
              src="/images/merwas-service1.png"
              alt="Service Image 1"
              className="service-img"
            />
            <img
              src="/images/merwas-service3.png"
              alt="Service Image 3"
              className="service-img"
            />
            <img
              src="/images/merwas-service2.png"
              alt="Service Image 2"
              className="service-img"
            />
          </div>
          <div className="main-par-service">
            <h3 className="h3-service">Coworking Spaces</h3>
            <p className="p-service">
              Increase Your Productivity in Inspirational Workspaces. Our
              coworking spaces are more than just workplaces - they are hubs for
              innovation and collaboration. Choose from diverse options,
              including open workspaces, private offices, and fully-equipped
              meeting rooms. Immerse yourself in a dynamic environment designed
              to stimulate creativity and enhance productivity.
            </p>
          </div>
        </div>
      </section>
  )
}
