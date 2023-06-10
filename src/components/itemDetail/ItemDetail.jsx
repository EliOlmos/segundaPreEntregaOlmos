import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import "../itemDetail/itemDetail.css"

const ItemDetail = ({
  id,
  categoria,
  titulo,
  imagen,
  descripcion,
  precio,
  stock,
}) => {
  const [addedQuantity, setAddedQuantity] = useState(0);

  const { addProduct } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setAddedQuantity(quantity);
    const item = { id, titulo, precio, imagen };
    addProduct(item, quantity);
  };
  return (
    <div>
      <div
        className="card mb-3 border-dark shadow p-3 mb-5 bg-body rounded"
        style={{ maxWidth: "540" }}
      >
        <div className="row g-0">
          <div className="col-md-4 border-dark">
            <img src={imagen} className="img-fluid rounded-start" alt={id} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{categoria}</p>
              <p className="card-text">{descripcion}</p>
              <p className="card-text">${precio}</p>
            </div>
            <div className="card-footer">
              {addedQuantity > 0 ? (
                <Link
                  to="/cart"
                  type="button"
                  className="btn btn-light btn-lg btn-floating m-3"
                  style={{ fontSize: "15px", padding: "10px 20px" }}
                >
                  Terminar Compra
                </Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
              )}
              <Link
                  to="/"
                  type="button"
                  className="btn btn-light btn-lg btn-floating m-3"
                  style={{ fontSize: "15px", padding: "10px 20px" }}
                >
                  Volver a Productos
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
