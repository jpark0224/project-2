// ! Import everything you need in here.
import { Link, Outlet } from "react-router-dom";

import React from "react";

function Layout() {
  return (
    <>
      <header>
        <nav className="navbar is-info">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/calendar" className="navbar-item">
                Calendar
              </Link>
              {/* <Link to="/datepage" className="navbar-item">
                Date Page
              </Link> */}
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
        <footer className="hero is-dark is-footer-item has-text-centered" >
          <p style={{padding:`20px`}}>✨ Made with love by Julie, Laura, and Rachel 🚀 project 2 sei-flex-22-ldn 🌙 </p>
        </footer>
      </main>
      
    </>
  );
}

export default Layout;
