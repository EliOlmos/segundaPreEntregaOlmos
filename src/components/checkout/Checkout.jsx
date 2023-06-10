import {
  Timestamp,
  writeBatch,
  collection,
  getDocs,
  query,
  where,
  documentId,
  addDoc,
} from "firebase/firestore";
import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import CheckoutForm from "../checkoutForm/CheckoutForm";

const Checkout = () => {
  //const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email, adress }) => {
    // setLoading(true)
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
          adress,
        },
        items: cart,
        total: total (),
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productInToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productInToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("hay productos que no tienen stock suficiente");
      }
    } catch (error) {
      console.log(error);
    }
    /* finally {
           setLoading(false)}*/
  };

  /* if (loading) {
    return <h1>Estamos preparando su orden...</h1>;
  } */

  if (orderId) {
    return <h1>Se ha generado su orden con el identificador: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;