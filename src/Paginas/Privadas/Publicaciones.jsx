import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Publicaciones() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy Publicaciones para nuevo producto</h1>
    </>
  );
}
