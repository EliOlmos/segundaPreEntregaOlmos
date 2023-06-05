import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, titulo, precio, imagen, quantity }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={imagen} alt={titulo} />
      <div>
        <p>{titulo}</p>
        <p>{quantity}</p>
        <p>{precio}</p>
        <p>Subtotal: ${quantity * precio} </p>
        <button
          type="button"
          className="btn btn-light btn-lg btn-floating m-3"
          style={{ fontSize: "15px", padding: "10px 20px" }}
          onClick={() => removeProduct(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
