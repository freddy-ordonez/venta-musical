import { DataGenreMusic } from "../components/DataGenreMusic"

export const GenMusic = () => {
  return (
    <div className="container mt-5">
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <DataGenreMusic />
        </tbody>
      </table>
    </div>
  )
}