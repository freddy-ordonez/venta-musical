import {Link} from 'react-router-dom';
export const NavAdmin = () => {
  return (
    <>
      <li class="nav-item">
        <Link className="nav-link active" aria-current="page" to="usuarios">
          Usuarios
        </Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link active" aria-current="page" to="genero-musical">
          Genero Musical
        </Link>
      </li>
    </>
  );
};
