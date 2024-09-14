import React, { useState } from "react";
import Envio from "./Envio";
import Button from "./Button";

const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    descripcion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) => setCliente({ ...cliente, nombre: event.target.value });
  const handleEmail = (event) => setCliente({ ...cliente, email: event.target.value });
  const handleDescripcion = (event) => setCliente({ ...cliente, descripcion: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (
      cliente.nombre.trim().length > 5 &&
      regex.test(cliente.email) &&
      cliente.descripcion.trim().length > 5
    ) {
      console.log(cliente);
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  if (show) {
    return <Envio cliente={cliente} />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
        <input type="text" value={cliente.nombre} onChange={handleName} />

        <label>Email:</label>
        <input type="email" value={cliente.email} onChange={handleEmail} />
        
        <label>Descripción:</label>
        <textarea value={cliente.descripcion} onChange={handleDescripcion} style={{ width: "100%", height: "200px" }} ></textarea>

        <Button>Enviar</Button>
      </form>
      {error && <p style={{ color: "red"}}>Por favor verifique su información nuevamente</p>}
    </>
  );
};

export default Form;
