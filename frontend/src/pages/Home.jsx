import { ButtonCartShopping } from "../components/cart/ButtonCartShopping";
import { Hero } from "../components/common/Hero";
import { Music } from "../components/music/Music";
import { estadoCancion } from "../store/songStore";

export const Home = ({ tipoUsuario }) => {
  return (
    <>
      <Hero />
      <Music />
      {tipoUsuario?.tipoUsuario === "USUARIO" ? <ButtonCartShopping /> : null}
    </>
  );
};
