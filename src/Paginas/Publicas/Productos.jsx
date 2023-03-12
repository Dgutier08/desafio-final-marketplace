import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Productos() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy la pagina productos</h1>
    </>
  );
}
