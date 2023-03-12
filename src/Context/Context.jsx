import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [dato, setData] = useState([]);
  const url = "/db.json";
  const consultarautos = async (url) => {
    try {
      fetch(url);
      const res = await axios.get(url);
      const { data } = await res;
      setData(data);
    } catch (error) {
      throw new Error("ha fallado la conexion con los datos", { cause: error });
    }
  };
  useEffect(() => {
    consultarautos(url);
  }, []);

  console.log(dato);
  const registrarcliente = (parametro) => {
    /*ejmplos de estrutura de funcion que hara registar*/
  };
  const inicarsecccion = (parametr) => {
    /*ejmplos de estrutura de funcion que hara registar*/
  };

  return (
    <Context.Provider value={{ dato, registrarcliente, inicarsecccion }}>
      {children}
    </Context.Provider>
  );
};
