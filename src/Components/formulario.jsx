import { useState } from "react";

const Formulario_cliente = (props) => {
  const [inputnombre, setInputNombre] = useState("");
  const [inputage, setInputcorreo] = useState("");
  const [inputusername, setInputcomentario] = useState("");
  const [inputpassword, setInputcotizacion] = useState("");

  const manejarFormulario = (e) => {
    e.preventDefault();

    var json = {
      nombre: inputnombre,
      age: inputage,
      username: inputusername,
      password: inputpassword,
      id: 2,
    };
    props.agregar_nombre(json);

    setInputNombre("");
    setInputcorreo("");
    setInputcomentario("");
    setInputcotizacion("");
  };
  return (
    <>
      <h3> Registrar cliente</h3>
      <form onSubmit={manejarFormulario} className="row  ">
        <div class="container">
          <input
            type="name"
            value={inputnombre}
            onChange={(e) => setInputNombre(e.target.value)}
            className="col-8 input"
            placeholder="name"
          />

          <input
            type="email"
            value={inputage}
            onChange={(e) => setInputcorreo(e.target.value)}
            className="col-8 input"
            placeholder="Email"
          />
          <input
            type="username"
            value={inputusername}
            onChange={(e) => setInputcomentario(e.target.value)}
            className="col-10 input"
            placeholder="username"
          />
          <input
            type="password"
            value={inputpassword}
            onChange={(e) => setInputcotizacion(e.target.value)}
            className="col-8 input"
            placeholder="password"
          />

          <button className="col-8 btn-primary">Agregar Usuario</button>
        </div>
      </form>
    </>
  );
};

export default Formulario_cliente;
