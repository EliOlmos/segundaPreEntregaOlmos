import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../carWidget/CartWidget";
import logo from "../../assets/logo.png"
import "../navBar/NavBar.css"

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bordes texto-nav"  style={{ backgroundColor: "#0d2d66"}}>
       
        <div className="container-fluid">
          <Link to={"/"}>
            <img
              width="120"
              height="120"
              src={logo}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav texto-nav">
              <li className="nav-item navbar-item">
                <NavLink
                  to={"/"}
                  type="button"
                  className="btn btn-light btn-lg  mx-2 texto-nav"
                  style={{
                    fontSize: "15px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item navbar-item">
                <NavLink to={"/SobreNosotros"}
                  type="button"
                  className="btn btn-light btn-lg  mx-2 texto-nav"
                  style={{
                    fontSize: "15px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Sobre Nosotros
                </NavLink>
              </li>
              
              <li className="nav-item navbar-item dropdown">
                <button
                  className="navbar-nav dropdown-toggle btn btn-light btn-lg btn-floating mx-2"
                  style={{
                    fontSize: "15px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                  }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </button>
                <ul className="dropdown-menu texto-nav navbar-item ">
                  <li className="nav-item navbar-item texto-nav">
                    <NavLink
                      to={"/category/1"}
                      type="button"
                      className="btn btn-light btn-lg btn-floating mx-2"
                      style={{
                        fontSize: "15px",
                        padding: "10px 20px",
                        fontWeight: "bold",
                      }}
                    >
                      Raquetas
                    </NavLink>
                  </li>
                  <li className="nav-item navbar-item">
                    <NavLink
                      to={"/category/2"}
                      type="button"
                      className="btn btn-light btn-lg btn-floating mx-2 texto-nav"
                      style={{
                        fontSize: "15px",
                        padding: "10px 20px",
                        fontWeight: "bold",
                      }}
                    >
                      Zapatillas
                    </NavLink>
                  </li>
                  <li className="nav-item navbar-item">
                    <NavLink
                      to={"/category/3"}
                      type="button"
                      className="btn btn-light btn-lg btn-floating mx-2 texto-nav"
                      style={{
                        fontSize: "15px",
                        padding: "10px 20px",
                        fontWeight: "bold",
                      }}
                    >
                      Indumentaria
                    </NavLink>
                  </li>
                  <li className="nav-item navbar-item">
                    <NavLink
                      to={"/category/4"}
                      type="button"
                      className="btn btn-light btn-lg btn-floating mx-2 texto-nav"
                      style={{
                        fontSize: "15px",
                        padding: "10px 20px",
                        fontWeight: "bold",
                      }}
                    >
                      Accesorios
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
