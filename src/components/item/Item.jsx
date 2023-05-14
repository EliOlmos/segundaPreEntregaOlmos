import React from "react";

const Item = ({id, titulo, imagen, descripcion, precio }) => {

  return (
    <div className="card m-3 mt-3" style={{ width: "18rem" }}>
      <h5 className="card-title">{titulo}</h5>
      
      <img src={imagen} className="card-img-top img-fluid" alt={titulo} />
      
      <div className="card-body">
        <p className="card-text">{descripcion}</p>
        <p className="card-text">${precio}</p>
      </div>
      <button>
          <p className="card-link">Más información {id}</p>
        </button>
        {/* Esto nos llevará al itemDetail */}
    </div>
  );
};

export default Item;
