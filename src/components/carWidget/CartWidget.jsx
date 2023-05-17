import React from 'react'

const CartWidget = () => {
  return (
    <div className="d-flex justify-content-end m-3">
    <button type="button" className="btn btn-light position-relative">
    <i className="fa-solid fa-cart-shopping fa-lg m-2" style={{color: "#a6be06"}}></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      6
      <span className="visually-hidden">unread messages</span>
    </span>
  </button></div>
  )
}

export default CartWidget