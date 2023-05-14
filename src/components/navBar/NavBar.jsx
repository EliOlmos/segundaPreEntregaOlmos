import React from "react";
import CartWidget from "../carWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <img
            width="100"
            height="75"
            src="https://www.opencup.com.ar/img/logo2.png"
            alt="logo"
          />
          <p className="navbar-brand" href="#">
            Tienda on line
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item " style={{ color: "#FFFFFF" }}>
                <p className="nav-link active" aria-current="page">
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Raquetas</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Zapatillas</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Accesorios</p>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget/>
      </nav>
    </div>
  );
};

export default NavBar;
