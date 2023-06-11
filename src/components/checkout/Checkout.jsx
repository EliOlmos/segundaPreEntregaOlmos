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
import { GlobalContext } from "../../context/GlobalContex";
import { db } from "../../firebase/config";
import CheckoutForm from "../checkoutForm/CheckoutForm";
import "../checkout/Checkout.css"
import Swal from "sweetalert2";

const Checkout = () => {
  const{setLoading}=useContext(GlobalContext)
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email, adress }) => {
    setLoading(true)
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
        Swal.fire('Lo lamento, no tenemos suficiente stock de un producto de su carrito')
      }
    } 
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error',
        color: "#a6be06",
        confirmButtonColor: "#a6be06",
      });
    }

    finally {
    setLoading(false)}
  };


  if (orderId) {
    return <h3 className="checkout">Se ha generado su orden con el identificador: {orderId}</h3>
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
