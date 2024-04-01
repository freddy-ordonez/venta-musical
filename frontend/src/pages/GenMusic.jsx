import { useEffect } from "react"
import { DataGenreMusic } from "../components/DataGenreMusic"
import { estadoGeneroMusical } from "../store/genMusicStore"

export const GenMusic = () => {

  const generos = estadoGeneroMusical(state => state.generos);
  const {todosGeneros} = estadoGeneroMusical();

  useEffect(()=> {
todosGeneros();
  }, [])

  const dataGeneros = generos.map( genero => (<DataGenreMusic key={genero._id} genero={genero}/>))

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
          {dataGeneros}
        </tbody>
      </table>
    </div>
  )
}