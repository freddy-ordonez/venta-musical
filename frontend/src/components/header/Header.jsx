import { Link, Outlet } from "react-router-dom";
import { Dropdown } from "../common/Dropdown";
import { NavCollapse } from "./NavCollapse";
import { estadoUsuario } from "../../store/userStore";

export const Header = () => {
  const usuario = estadoUsuario((state) => state.login);
  return (
    <>
      <nav className="nav navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="logo navbar-brand fw-bold fs-2" to={"/"}>
            JF.Music
          </Link>
          <NavCollapse
            tipoUsuario={
              usuario ? usuario.tipoUsuario["tipoUsuario"] : "USUARIO"
            }
          />
          {usuario ? <Dropdown usuario={usuario} /> : null}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
