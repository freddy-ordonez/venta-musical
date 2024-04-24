import { Link } from "react-router-dom";
import { NavAdmin } from "./NavAdmin";

export const NavCollapse = ({ tipoUsuario }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav-collapse navbar-nav d-flex w-100 justify-content-center gap-lg-5 mb-2 mb-lg-0 fw-bold fs-4">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="canciones">
            Canciones
          </Link>
        </li>
        {tipoUsuario !== "ADMINISTRADOR" ? null : <NavAdmin />}
      </ul>
    </div>
  );
};
