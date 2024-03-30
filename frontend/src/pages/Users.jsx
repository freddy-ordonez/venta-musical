import { DataUser } from "../components/DataUser";

const numeros = [1,2,3,4]
const dataUsers = numeros.map(()=> <DataUser />)
export const Users = () => {
    
  return (
    <div className="container mt-5">
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Name</th>
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
