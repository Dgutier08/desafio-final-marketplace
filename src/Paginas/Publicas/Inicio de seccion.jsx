import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Login() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy pagina de login</h1>
    </>
  );
}
