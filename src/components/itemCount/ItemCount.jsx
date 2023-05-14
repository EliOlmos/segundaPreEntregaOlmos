import React, { useState } from 'react'


const ItemCount = ([dataBase],initial, onAdd) => {
  const[count, setCount]=useState(1)
  onAdd=()=>{
    if (count < dataBase.stock){
    setCount = count +1
    }
  }

    return (
        <div className="d-flex justify-content-center">
        <p className="text-center text-secondary text-size-4 m-2">{count}</p>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onAdd}
        >
          +
        </button>
      </div>
  )
}

export default ItemCount