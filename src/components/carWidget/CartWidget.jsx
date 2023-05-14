import React from 'react'

const CartWidget = () => {
  return (
    <div><button type="button" className="btn btn-primary position-relative">
    <i className="fa-solid fa-cart-shopping fa-lg" style={{color: "#0af030"}}></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      6
      <span className="visually-hidden">unread messages</span>
    </span>
  </button></div>
  )
}

export default CartWidget