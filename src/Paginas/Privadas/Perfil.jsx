import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Perfil() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy perfil</h1>
    </>
  );
}
