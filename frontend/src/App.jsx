import { ButtonCartShopping } from "./components/ButtonCartShopping";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Music } from "./components/Music";
import { Routes, Route, Link, Outlet} from "react-router-dom";
import { Home } from "./pages/Home";
import {ShoopingCart} from './components/ShoopingCart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="canciones" element={<div>Canciones</div>} />
          <Route path="usuarios" element={<div>Usuarios</div>} />
          <Route path="carrito" element={<ShoopingCart />} />
        </Route>
      </Routes>
      <ButtonCartShopping />
    </div>
  );
}

export default App;
