import { ButtonCartShopping } from "./components/cart/ButtonCartShopping";
import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ShoopingCart } from "./components/cart/ShoopingCart";
import { Profile } from "./pages/Profile";
import { Songs } from "./pages/Songs";
import { GenMusic } from "./pages/GenMusic";
import { Users } from "./pages/Users";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useEffect } from "react";
import { estadoCancion } from "./store/songStore";
import { estadoUsuario } from "./store/userStore";
import axios from "axios";
import { estadoCarritoCompras } from "./store/cartShoopingStore";
import { SongsUser } from "./pages/SongsUser";
import { NoFound } from "./pages/NoFound";

function App() {
  useEffect(() => {
    todasCanciones();
    todosUsuarios();
    autenticarUsuario();
    todosTiposUsuarios()
    if (login) todosCancionesCarrito();
  }, []);

  const { todasCanciones } = estadoCancion();
  const { todosUsuarios, autenticarUsuario, todosTiposUsuarios } = estadoUsuario();
  const { todosCancionesCarrito } = estadoCarritoCompras();
  const { login } = estadoUsuario();

  axios.defaults.withCredentials = true;

  const tipoUsuario = login ? login.tipoUsuario["tipoUsuario"] : null
  
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Home tipoUsuario={login?.tipoUsuario} />} />
          <Route path="canciones" element={<Songs />} />
          <Route path="usuarios" element={tipoUsuario === "ADMINISTRADOR" ? <Users /> : <NoFound />} />
          <Route path="carrito" element={<ShoopingCart />} />
          <Route path="perfil" element={login ? <Profile /> : null} />
          <Route path="genero-musical" element={tipoUsuario === "ADMINISTRADOR" ? <GenMusic /> : <NoFound />} />
          <Route path="mis-canciones" element={<SongsUser />} />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default App;
