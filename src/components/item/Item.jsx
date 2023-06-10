import React from "react";
import { useNavigate } from "react-router-dom";
import "../item/Item.css";

const Item = ({ id, categoria, titulo, imagen, descripcion, precio }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card m-5 mt-3 shadow-lg p-3 mb-5 bg-body rounded hover"
      style={{ width: "18rem" }}
    >
      <h5 className="card-title">{titulo}</h5>

      <img src={imagen} className="card-img-top img-fluid" alt={titulo} />

      <div className="card-body">
        <p
          className="card-text"
          style={{ fontSize: "25px", fontWeight: "bold" }}
        >
          ${precio}
        </p>
      </div>
      <button
        onClick={() => navigate(`/item/${id}`)}
        type="button"
        className="btn btn-light btn-lg btn-floating m-3"
        style={{ fontSize: "15px", padding: "10px 20px" }}
      >
        Más información
      </button>
    </div>
  );
};

export default Item;
