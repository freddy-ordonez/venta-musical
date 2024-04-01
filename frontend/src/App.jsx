import { ButtonCartShopping } from "./components/ButtonCartShopping";
import { Header } from "./components/Header";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { ShoopingCart } from "./components/ShoopingCart";
import { Profile } from "./pages/Profile";
import { Songs } from "./pages/Songs";
import { GenMusic } from "./pages/GenMusic";
import { Users } from "./pages/Users";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useEffect } from "react";
import { estadoCancion } from "./store/songStore";

function App() {
  const { todasCanciones } = estadoCancion();

  useEffect(() => {
    todasCanciones();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registrarse" element={<Register />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="canciones" element={<Songs />} />
          <Route path="usuarios" element={<Users />} />
          <Route path="carrito" element={<ShoopingCart />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="genero-musical" element={<GenMusic />} />
        </Route>
      </Routes>
      <ButtonCartShopping />
    </div>
  );
}

export default App;
