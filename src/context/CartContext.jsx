import { useState } from "react";
import { createContext } from "react";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    const newObj = { ...item, quantity };
    if (isInCart(newObj.id)) {
      cart.map((el) => {
        if (el.id === newObj.id) {
          el.quantity += newObj.quantity;
        }
        return el;
      });
    } else {
      setCart([...cart, newObj]);
    }
  };

  const removeProduct = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.find((prod) => prod.id === itemId) ? true : false;
  };

  const total = () => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.precio * item.quantity;
    }, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{ addProduct, removeProduct, clearCart, isInCart, total, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};
