import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bringData, getCategory } from "../../promise";
import ItemList from "../itemList/ItemList";

const ItemListConteiner = () => {

  const [items, setItems] = useState([]);

  const {itemCategory}= useParams()

  useEffect(() => {
    const asyncFun = itemCategory ? getCategory : bringData
    asyncFun(itemCategory)
    .then (res =>{setItems(res)})
    .catch (err=>{console.log(err);})
    
  }, [itemCategory]);

  return (
    <div>
      <ItemList items={items}/>
    </div>
  );
};

export default ItemListConteiner;
