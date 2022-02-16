// ! Import everything you need in here.
import { Link, Outlet } from "react-router-dom";

import React from "react";

function Layout() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
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
      </main>
    </>
  );
}

export default Layout;
