import { ButtonCartShopping } from "../components/ButtonCartShopping"
import { Hero } from "../components/Hero"
import { Music } from "../components/Music"
import { estadoCancion } from "../store/songStore"

export const Home = ({tipoUsuario}) => {
  return (
    <>
        <Hero />
        <Music />
        {tipoUsuario?.tipoUsuario === "USUARIO" ? <ButtonCartShopping /> : null}
    </>
  )
}