import React from "react";
import "../footer/footer.css"

export const Footer = () => {
  return (
      <div className="navbar navbar-expand-lg navbar-light bordeFooter"
      style={{ backgroundColor: "#0d2d66" }} >
        <div className="container d-flex justify-content-center" style={{ backgroundColor: "lighgray"}}>
          <button
            type="button"
            className="btn btn-light btn-lg btn-floating mx-2"
          >
            <i className="fab fa-facebook-f" style={{color: "#a6be06"}}></i>
          </button>
          <button
            type="button"
            className="btn btn-light btn-lg btn-floating mx-2"
          >
            <i className="fab fa-youtube" style={{color: "#a6be06"}}></i>
          </button>
          <button
            type="button"
            className="btn btn-light btn-lg btn-floating mx-2"
          >
            <i className="fab fa-instagram" style={{color: "#a6be06"}}></i>
          </button>
        </div>
      </div>
  );
};
