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

function App() {
  useEffect(() => {
    todasCanciones();
    todosUsuarios();
    autenticarUsuario();
    if (login) todosCancionesCarrito();
  }, []);

  const { todasCanciones } = estadoCancion();
  const { todosUsuarios, autenticarUsuario } = estadoUsuario();
  const { todosCancionesCarrito } = estadoCarritoCompras();
  const { login, usuarios } = estadoUsuario();

  axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Home tipoUsuario={login?.tipoUsuario} />} />
          <Route path="canciones" element={<Songs />} />
          <Route path="usuarios" element={<Users />} />
          <Route path="carrito" element={<ShoopingCart />} />
          <Route path="perfil" element={login ? <Profile /> : null} />
          <Route path="genero-musical" element={<GenMusic />} />
          <Route path="mis-canciones" element={<SongsUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
