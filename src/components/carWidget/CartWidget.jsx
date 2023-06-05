import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  const{cart} = useContext(CartContext)

  return (
    <Link to="/cart" style={{ display: cart.length > 0 ? "block" : "none" }}>
    <div className="d-flex justify-content-end m-3">
    <button type="button" className="btn btn-light position-relative">
    <i className="fa-solid fa-cart-shopping fa-lg m-2" style={{color: "#a6be06"}}></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {cart.length}
      <span className="visually-hidden">unread messages</span>
    </span>
  </button></div></Link>
  )
}

export default CartWidget