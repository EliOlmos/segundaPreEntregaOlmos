import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  //const [loading, setLoading]= useState(true)
  const { itemCategory } = useParams();

  useEffect(() => {
    //setLoading(true)
    const collectionCategory = itemCategory
      ? query(
          collection(db, "products"),
          where("categoria", "==", itemCategory)
        )
      : collection(db, "products");
    getDocs(collectionCategory)
      .then((res) => {
        const productsCategory = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setItems(productsCategory);
      })
      .catch((error) => {
        console.log(error);
      });

    /* .finally(() => {
        setLoading(false);
      }); */
  }, [itemCategory]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListConteiner;
