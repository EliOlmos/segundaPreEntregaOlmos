import React, {useContext} from "react";
import { Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import "../cart/CartItem.css"
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tu carrito está vacío",
        color: "#a6be06",
        confirmButtonColor: "#a6be06",
      });
    
    return (
      <div style={{display:"flex", flexDirection: "column", height: "80vh"}}>
        <Link
          to="/"
          type="button"
          className="btn btn-light btn-lg btn-floating m-3"
          style={{ fontSize: "15px", padding: "10px 20px" }}
        >
          Click aquí para volver a Productos
        </Link>
        <div className="cartEmpty">
        <i className="fa-solid fa-cart-arrow-down fa-2xl" style={{color: "#a6be06"}}></i>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <hr></hr>
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
