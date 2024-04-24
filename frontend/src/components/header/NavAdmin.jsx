import {Link} from 'react-router-dom';
export const NavAdmin = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="usuarios">
          Usuarios
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="genero-musical">
          Genero Musical
        </Link>
      </li>
    </>
  );
};
