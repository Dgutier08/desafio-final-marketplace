import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import axios from "axios";
import { AESEncrypt } from "./encrips";

export default function LoginPage() {
  const { setUsuario } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;

    setUsuarioLocal({ ...usuario, ...field });
  };

  const LogIn = async () => {
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const {
        data: { token },
      } = await axios.post("users.json", usuario);

      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", AESEncrypt(token));

      setUsuario(email);
      navigate("/perfil");
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };

  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1>Iniciar Sesión</h1>
      <hr />
      <div className="form-group mt-1 ">
        <label>Name</label>
        <input
          value={usuario.name}
          onChange={handleSetUsuario}
          type="name"
          name="name"
          className="form-control"
          placeholder="digite Name"
        />
      </div>

      <div className="form-group mt-1 ">
        <label>Email address</label>
        <input
          value={usuario.email}
          onChange={handleSetUsuario}
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group mt-1 ">
        <label>Password</label>
        <input
          value={usuario.password}
          onChange={handleSetUsuario}
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <button onClick={LogIn} className="btn btn-light mt-3">
        Iniciar Sesión
      </button>
    </div>
  );
}
