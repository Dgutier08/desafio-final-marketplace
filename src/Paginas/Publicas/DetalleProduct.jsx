import { Context } from "../../Context/Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export function Detalleproducto() {
  const { id } = useParams();
  const { dato } = useContext(Context);
  const productos = dato.products;
  const x = productos?.findIndex((x) => x.id === parseInt(id));

  return (
    <>
      <h1>soy detalle product</h1>
    </>
  );
}
