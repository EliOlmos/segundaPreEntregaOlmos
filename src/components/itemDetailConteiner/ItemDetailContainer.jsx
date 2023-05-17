import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemId } from "../../promise";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const {itemId} = useParams();

  useEffect(() => {
    getItemId(itemId)
      .then((res) => {
        setItem(res);
      })
      .catch((err) => console.log(err));
  }, [itemId]);
  
  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
