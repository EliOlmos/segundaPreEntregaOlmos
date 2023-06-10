import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import {doc, getDoc} from "firebase/firestore"
import {db} from '../../firebase/config'
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContex";

const ItemDetailContainer = () => {
  const {setLoading} = useContext(GlobalContext)
  const [item, setItem] = useState(null);
  const {itemId} = useParams();

  useEffect(()=>{
    setLoading(true)
    const docRef = doc(db,'products', itemId)

    getDoc (docRef)
    .then (response => {
      const data =response.data()
      const productAdapted = {id: response.id, ...data}
      setItem(productAdapted)
    })
    .catch(error => {
      console.log(error);
    })
     .finally(() => {
        setLoading(false);
      });
  }, [itemId])
  
  
  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
