import React from 'react'
import Link from "next/link";
export default function Nav() {
  return (
    <header className="header">
    <div className="header-content">
      <div className="logo-container">
        <img src="/images/merwas-logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="nav-menu">
        <Link href="#home" className="nav-link">
          Home
        </Link>
        <Link href="#about" className="nav-link">
          About Us
        </Link>
        <Link href="#services" className="nav-link">
          Services
        </Link>
        <Link href="#partners" className="nav-link">
          Partners
        </Link>
        <Link href="#contact" className="nav-link">
          Contact Us
        </Link>
      </nav>
      <div className="controls-container">
        <select className="language-select">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
      <div className="button-container">
        <button className="vertical-button">Register</button>
        <button className="vertical-button">LogIn</button>
      </div>
    </div>
  </header>
  )
}
