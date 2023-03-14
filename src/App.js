import "./App.css";
//import { ContextProvider } from "./Context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Publicas/Home";
import Registrar from "./Paginas/Publicas/Registra";
import { SobreNostros } from "./Paginas/Publicas/sobreNostros";
import Productos from "./Paginas/Publicas/Productos";
import Perfil from "./Paginas/Privadas/Perfil";
import Compras from "./Paginas/Privadas/Compras";
import Productosquetegustan from "./Paginas/Privadas/likes-productos";
import Seguimientos from "./Paginas/Privadas/Seguimientos";
import Publicaciones from "./Paginas/Privadas/Publicaciones";
import Navar from "./layouts/Navbar";
import Login from "./layouts/Login";
//import Login from "./Paginas/Publicas/Inicio de seccion";
import { Detalleproducto } from "./Paginas/Publicas/DetalleProduct";
import Events from "./layouts/Events";
import  AuthContexProvider  from "./layouts/context/AuthContexProvider";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <AuthContexProvider>
            <Navar />
            <Routes>
              --rutas-- -- Publicas--
              <Route path="/" element={<Home />} />
              {/* <Route path="/events" element={<Events />} /> */}
              <Route path="/nosotros" element={<SobreNostros />} />
              <Route path="/registrar" element={<Registrar />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/auto/:id" element={<Detalleproducto />} />
              -- rutas Privadas--
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/compras" element={<Compras />} />
              <Route path="/likes" element={<Productosquetegustan />} />
              <Route path="/seguimientos" element={<Seguimientos />} />
              <Route path="/publicar" element={<Publicaciones />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </AuthContexProvider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
