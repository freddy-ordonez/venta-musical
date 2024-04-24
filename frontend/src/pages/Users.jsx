import { useEffect, useState } from "react";
import { DataUser } from "../components/user/DataUser";
import { estadoUsuario } from "../store/userStore";
import { Alert } from "../components/common/Alert";
import { Link } from "react-router-dom";

export const Users = () => {
  useEffect(() => {
    todosTiposUsuarios();
  }, []);

  const tiposUsuarios = estadoUsuario((state) => state.tiposUsuarios);
  const usuarios = estadoUsuario((state) => state.usuarios);
  const { todosTiposUsuarios } = estadoUsuario();

  const [alerta, setAlerta] = useState({
    abrir: false,
    mensaje: "",
    tipo: "",
  });

  return (
    <div className="container mt-5">
      {alerta.abrir ? (
        <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
      ) : null}
      <div>
        <Link className="btn btn-dark rounded-0 fs-4 mb-4" to={"/registrarse"}>
          Agregar Usuario
        </Link>
      </div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Nombre</th>
            <th>Cedula y Genero</th>
            <th>Tipo Usuario</th>
            <th>Metodo Pago</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <DataUser
              key={usuario._id}
              usuario={usuario}
              tiposUsuarios={tiposUsuarios}
              setAlerta={setAlerta}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
