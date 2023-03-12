import { Context } from "../../Context/Context";
import { useContext } from "react";
import Footer from "../../layouts/Footer";

export default function Home() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <div className="container-fluid">
        <section className="contenedor-main row align-items-center">
          <aside className="col-md-2">
            <h3>ASIDE</h3>
            <p className="d-none d-md-block">4 Columnas</p>
            <p className="d-block d-md-none">12 Columnas</p>
          </aside>
          <main className="col-md-10"></main>
        </section>
        <Footer />
      </div>
    </>
  );
}
