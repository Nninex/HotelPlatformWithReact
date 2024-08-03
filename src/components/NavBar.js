import React from "react";
import "bootswatch/dist/spacelab/bootstrap.min.css";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      data-bs-theme="dark"
      style={{ padding: "0.2rem 0.5rem", lineHeight: "0.5" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Hotel Platform
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/menu"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/reservation">
                  Reserve a room
                </a>
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/contact">
                  Contact Us
                </a>
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
