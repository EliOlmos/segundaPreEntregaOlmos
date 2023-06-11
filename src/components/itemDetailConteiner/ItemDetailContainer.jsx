import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import {doc, getDoc} from "firebase/firestore"
import {db} from '../../firebase/config'
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContex";
import Swal from "sweetalert2";

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
  }, [itemId, setLoading])
  
  
  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
