import { Context } from "../../Context/Context";
import { useContext } from "react";
import Footer from "../../layouts/Footer";
import { useNavigate } from "react-router-dom";

export default function Productos() {
  const navigate = useNavigate();
  const { dato } = useContext(Context);
  const productos = dato.products;
  console.log(productos);
  return (
    <>
      <h1>soy la pagina productos</h1>
      <div className="row">
        {productos?.map((intem, index) => (
          <div
            key={index}
            className="col-6 col-sm-3 col-lg-4 cartas-pagina-productos"
          >
            <div className="card">
              <div className="card-body">
                <div
                  style={{
                    backgroundImage: `url(${intem.productUrl})`,
                    width: "90%",
                    height: "130px",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="textos-cartas">
                  <p className="card-title">{intem.nombre}</p>

                  <p className="card-title">$Precio:{intem.precio}</p>
                </div>
                <button
                  className="boton-cartas"
                  onClick={() => navigate(`/auto/${intem.id}`)}
                >
                  <span className="vermas"> Ver más</span>
                </button>
                <hr></hr>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
