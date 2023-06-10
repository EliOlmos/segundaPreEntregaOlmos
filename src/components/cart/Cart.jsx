import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>Su carrito está vacío</h1>
        <Link
          to="/"
          type="button"
          className="btn btn-light btn-lg btn-floating m-3"
          style={{ fontSize: "15px", padding: "10px 20px" }}
        >
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <h3>Total: ${total()}</h3>
      <button
        onClick={() => clearCart()}
        type="button"
        className="btn btn-light btn-lg btn-floating m-3"
        style={{ fontSize: "15px", padding: "10px 20px" }}
      >
        Limpiar carrito
      </button>
      <Link
        to="/checkout"
        type="button"
        className="btn btn-light btn-lg btn-floating m-3"
        style={{ fontSize: "15px", padding: "10px 20px" }}
      >
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
