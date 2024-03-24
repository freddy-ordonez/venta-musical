export const FormMusic = () => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="Nombre" class="form-label fs-4">
            Nombre
          </label>
          <input type="Nombre" class="form-control" id="nombre" />
        </div>
        <div class="mb-3">
          <label for="Precio" class="form-label fs-4">
            Precio
          </label>
          <input type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="imagen-cancion" class="form-label fs-4">
            Imagen
          </label>
          <input class="form-control" type="file" id="imagen-cancion" />
        </div>
        <div className="mb-3">
          <label for="genero" class="form-label fs-4">
            Genero
          </label>
          <select
            class="form-select"
            id="genero"
            aria-label="Default select example"
          >
            <option value="1">One</option>
          </select>
        </div>
      </form>
    </div>
  );
};
