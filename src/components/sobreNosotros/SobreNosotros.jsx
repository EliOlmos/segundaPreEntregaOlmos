import React from "react";
import "../sobreNosotros/SobreNosotros.css";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
  return (
    <div classNameName="fondo">
      <div className="card">
        <div className="card-header">
          <h1>Sobre OPENCUP</h1>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              OPENCUP nació como un torneo de tenis Amateur de Córdoba Capital,
              actualmente uno más grandes de la provincia. Cuenta con jugadores
              de la capital y alrededores.
            </p>
            <p>
              Nuestra tienda nace como una necesidad de poder brindar más
              servicios a nuestros jugadores con la idea de comercializar sus
              productos ofreciendolos a otros competidores o al público en
              general
            </p>
            <footer className="blockquote-footer">
              Podes acceder a más información en nuestro sitio{" "}
              <cite title="Source Title">
                <Link to="https://www.opencup.com.ar/"
                  className="text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.opencup.com.ar
                </Link>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
