import { Link } from "react-router-dom";
import { estadoUsuario } from "../store/userStore";

export const Hero = () => {
  const login = estadoUsuario((state) => state.login);
  console.log(login);
  return (
    <div className="container-lg mt-5">
      <div className="d-flex flex-column justify-content-start align-items-start text-start">
        <h2 className="fs-1 fw-bold">Encuentra Tu Ritmo:</h2>
        <span className="fs-1 fw-bold">
          Explora y Compra en Nuestra Tienda Musical
        </span>
        <p className="fs-3 fw-bold my-5">
          Explora nuestra amplia colección de canciones, álbumes y playlists
          curadas con cuidado, diseñadas para satisfacer todos los gustos y
          estados de ánimo
        </p>
        {!login ? (
          <Link
            className="inicia-sesion btn text-dark rounded-0 "
            style={{ backgroundColor: "#FF82C2" }}
            to="/login"
          >
            Iniciar Sesión
          </Link>
        ) : null}
      </div>
    </div>
  );
};
