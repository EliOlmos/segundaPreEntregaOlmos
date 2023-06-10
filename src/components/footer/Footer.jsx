import React from "react";
import "../footer/footer.css";

export const Footer = () => {
  return (
    <div
      className="main-footer bordeFooter"
      style={{
        backgroundColor: "#0d2d66",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <div>
                  <p className="text">¿Dónde estamos?</p>
                  <iframe
                    title="mapa de donde estamos"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13623.980506698928!2d-64.2512208!3d-31.3866979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x96573a9b0965380e!2sClub%20Botanico%20by%20Ca%C3%B1as%20Tennis!5e0!3m2!1ses-419!2sar!4v1658261676590!5m2!1ses-419!2sar"
                    width="100"
                    height="100"
                    style={{
                      border: "10px",
                      allowfullscreen: "",
                      loading: "lazy",
                      referrerpolicy: "no-referrer-when-downgrade",
                    }}
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>
          <div className="col" style={{ backgroundColor: "lighgray" }}>
            <p className="text">Envianos tu consulta</p>
            <ul className="list-unstyled">
              <li>
                <button type="button" className="btn btn-light btn-lg mx-2">
                  <a
                    className="text-muted"
                    href="https://wa.me/5493512203051/?text=Hola, Necesito más información sobre sus productos!"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-whatsapp"
                      style={{ color: "#a6be06" }}
                    ></i>
                  </a>
                </button>
              </li>
            </ul>
          </div>
          <div className="col" style={{ backgroundColor: "lighgray" }}>
            <ul className="list-unstyled">
              <p className="text">Seguinos en Instagram</p>
              <li>
                <button type="button" className="btn btn-light btn-lg mx-2">
                  <a
                    className="text-muted"
                    href="https://www.instagram.com/opencup_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-instagram"
                      style={{ color: "#a6be06" }}
                    ></i>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text" />
        <div className="row">
          <p className="col-sm text">© Todos los derechos reservados | Desarrollado por TESA para OPENCUP</p>
        </div>
      </div>
    </div>
  );
};
