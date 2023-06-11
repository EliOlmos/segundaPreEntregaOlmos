import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import { GlobalContext } from "../../context/GlobalContex";
import Swal from "sweetalert2";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  const{setLoading}=useContext(GlobalContext)
  const { itemCategory } = useParams();

  useEffect(() => {
    setLoading(true)
    const collectionCategory = itemCategory
      ? query(
          collection(db, "products"),
          where("categoria", "==", itemCategory)
        )
      : collection(db, "products");
    getDocs(collectionCategory)
      .then(res => {
        const productsCategory = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setItems(productsCategory);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un error',
        });
      })
      .finally(() => {
        setLoading(false);
      });         
          
  }, [itemCategory, setLoading]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListConteiner;
