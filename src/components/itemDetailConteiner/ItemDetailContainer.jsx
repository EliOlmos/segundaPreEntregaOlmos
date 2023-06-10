import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import {doc, getDoc} from "firebase/firestore"
import {db} from '../../firebase/config'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  //const [loading, setLoading]=useState(true)
  const {itemId} = useParams();

  useEffect(()=>{
    // setLoading(true)
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
     /* .finally(() => {
        setLoading(false);
      }); */
  }, [itemId])
  
  
  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
