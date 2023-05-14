import React from "react";
import Item from "../item/Item";

const ItemList = ({ items }) => {
  return (
    <div style={{ backgroundcolor: "gray" }}>
      <div className="row d-flex justify-content-around">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
