import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../cart/CartItem.css"

const CartItem = ({ id, titulo, precio, imagen, quantity }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={imagen} alt={titulo} />
      <div className="detalle">
        <p className="items">{titulo}</p>
        <p className="items">{quantity}</p>
        <p className="items">{precio}</p>
        <p className="items">Subtotal: ${quantity * precio} </p>
       
        <button
          type="button"
          className="btn btn-light btn-lg btn-floating m-3"
          style={{ fontSize: "15px", padding: "10px 20px" }}
          onClick={() => removeProduct(id)}
        >
          Eliminar
        </button>
        <hr></hr>
      </div>
    </div>
  );
};

export default CartItem;
