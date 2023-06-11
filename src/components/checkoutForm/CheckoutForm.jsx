import React from "react";
import { useState } from "react";
import '../checkoutForm/CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
      adress,
    };

    onConfirm(userData);
  };

  return (
    <div className="containerForm">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre
          <input
            className="Input"
            id='name'
            type="text"
            name="Nombre y Apellido" required
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="Label">
          Telefono
          <input
            className="Input"
            type="text"
            name="Teléfono" required
            id='phone'
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="Label">
          Email
          <input
            className="Input"
            id='email'
            type="text"
            name="Email" required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label className="Label">
          Dirección
          <input
            className="Input"
            id='adress'
            type="text"
            name="Direccion" required
            value={adress}
            onChange={({ target }) => setAdress(target.value)}
          />
        </label>

        <div className="Label">
          <button
            type="submit"
            className="btn btn-light btn-lg btn-floating m-3"
            style={{ fontSize: "15px bold", padding: "10px 20px" , fontWeight:"bold"}}
          >
            Confirmar su Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
