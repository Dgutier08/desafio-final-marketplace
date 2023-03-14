import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Login() {
  const { usuario } = useContext(Context);
  console.log(usuario);
  return (
    <>
      <h1>soy pagina de login</h1>
    </>
  );
}
