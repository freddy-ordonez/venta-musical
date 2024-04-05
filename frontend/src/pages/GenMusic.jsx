import { useEffect } from "react";
import { DataGenreMusic } from "../components/DataGenreMusic";
import { estadoGeneroMusical } from "../store/genMusicStore";
import { ModalGen } from "../components/ModalGen";


export const GenMusic = () => {
  const generos = estadoGeneroMusical((state) => state.generos);
  const { todosGeneros } = estadoGeneroMusical();

  useEffect(() => {
    todosGeneros();
  }, []);

  const dataGeneros = generos.map((genero) => (
    <DataGenreMusic key={genero._id} genero={genero} />
  ));

  return (
    <div className="container mt-5">
      <h5 className="fs-2 fw-bold my-5">Generos Musicales</h5>
      <div>
        <button
          type="button"
          class="btn btn-dark rounded-0 fs-4 mb-4"
          data-bs-toggle="modal"
          data-bs-target="#modalAgregarGenero"
        >
          Agregar Genero Musical
        </button>
      </div>
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{dataGeneros}</tbody>
      </table>
      <ModalGen />
    </div>
  );
};
