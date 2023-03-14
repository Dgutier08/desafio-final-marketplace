import { createContext, useEffect, useState } from "react";
import Formulario_cliente from "../Paginas/Publicas/Registra";
import axios from "axios";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [dato, setData] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const url = "/db.json";
  const consultarautos = async (url) => {
    try {
      fetch(url);
      const res = await axios.get(url);
      const { data } = await res;
      setData(data);
      setUsuario(data.usuario);
    } catch (error) {
      throw new Error("ha fallado la conexion con los datos", { cause: error });
    }
  };
  useEffect(() => {
    consultarautos(url);
  }, []);

  console.log(dato);
  console.log(usuario);

  return (
    <Context.Provider value={{ dato, usuario, setUsuario }}>
      {children}
    </Context.Provider>
  );
};
