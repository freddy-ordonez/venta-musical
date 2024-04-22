import { Link } from "react-router-dom";
import { estadoUsuario } from "../store/userStore";
import {useNavigate} from 'react-router-dom'

export const Dropdown = ({usuario}) => {
  const navigate = useNavigate()
  const {cerrarSesion} = estadoUsuario()
  const manejoCerrarSesion = ()=> {
    cerrarSesion()
    navigate("/")
  }

  return (
    <div class="btn-group">
      <button
        type="button"
        class="avatar btn btn-dark fs-4 dropdown-toggle rounded-0"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        {usuario.nombre}
      </button>
      <ul class="dropdown-menu dropdown-menu-start dropdown-menu-lg-end fs-5">
        <li>
          <Link className="dropdown-item" to="perfil">
            Perfil
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="mis-canciones">
            Mis Canciones
          </Link>
        </li>
        <li>
          <button className="dropdown-item" onClick={manejoCerrarSesion}>
            Login Out
          </button>
        </li>
      </ul>
    </div>
  );
};
