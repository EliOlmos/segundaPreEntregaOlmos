import React from "react";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ id, categoria, titulo, imagen, descripcion, precio, stock }) => {
  return (
    <div>
      <div className="card mb-3 border-dark shadow p-3 mb-5 bg-body rounded" style={{ maxWidth: "540" }}>
        <div className="row g-0">
          <div className="col-md-4 border-dark">
            <img src={imagen} className="img-fluid rounded-start" alt={id} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{categoria}</p>
              <p className="card-text">{descripcion}</p>
              <p className="card-text">${precio}</p>
            </div>
            <div className="card-footer">
              <ItemCount
                initial={1}
                stock={stock}
                onAdd={(count) => console.log("cantidad agregada", count)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
