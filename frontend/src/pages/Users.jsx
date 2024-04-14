import { useEffect, useState } from "react";
import { DataUser } from "../components/DataUser";
import { estadoUsuario } from "../store/userStore";
import { Alert } from "../components/Alert";



export const Users = () => {
  
  const tiposUsuarios = estadoUsuario((state) => state.tipoUsuarios);
  const usuarios = estadoUsuario((state) => (state.usuarios));
  const {todosTiposUsuarios} = estadoUsuario();

  const [alerta, setAlerta] = useState({
    abrir: false,
    mensaje: "",
    tipo: "",
  });

  const dataUsers = usuarios.map((usuario)=> <DataUser key={usuario._id} usuario={usuario} tiposUsuarios={tiposUsuarios} setAlerta={setAlerta}/>)

  useEffect(()=> {
    todosTiposUsuarios()
  }, [])
  return (
    <div className="container mt-5">
      {alerta.abrir ? <Alert mensaje={alerta.mensaje} tipo={alerta.tipo}/> : null }
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
          {dataUsers}
        </tbody>
      </table>
    </div>
  );
};
