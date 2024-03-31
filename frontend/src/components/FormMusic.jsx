import { useFormik } from "formik";
import * as Yup from "yup";

export const FormMusic = () => {
  const validacionExtensiones = {
    imagen: ["jpg","png", "jpeg"]
  };

  function validarTipoArchivo(nombreArchivo, tipoArchivo) {
    return (
      nombreArchivo &&
      validacionExtensiones[tipoArchivo].indexOf(nombreArchivo.split(".").pop()) > -1
    );
  }

  function tomarExtensionesPermitidas(tipo) {
    return validacionExtensiones[tipo].map((e) => `.${e}`).toString();
  }

  const MAX_FILE_SIZE = 1024 * 1024 * 2;

  const esquemaValidacion = Yup.object().shape({
    nombre: Yup.string().required("El nombre es obligatorio"),
    precio: Yup.number("Solo numeros").required("El precio es obligatorio"),
    generoMusical: Yup.string(),
    imagen: Yup
    .mixed()
    .required("La imagen de la cancion es obligatorio")
    .test("is-valid-type", `Extensiones permitidas ${validacionExtensiones.imagen.join(",")}`,
      value => validarTipoArchivo(value && value.name.toLowerCase(), "imagen"))
    .test("is-valid-size", "Maximo permitido 2 mb",
      value => value && value.size <= MAX_FILE_SIZE)
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: 0,
      generoMusical: "",
      imagen: null,
    },
    validationSchema: esquemaValidacion,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="Nombre" class="form-label fs-4">
            Nombre
          </label>
          <input
            type="Nombre"
            class="form-control"
            id="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
          {formik.errors.nombre ? <div>{formik.errors.nombre}</div> : null}
        </div>
        <div class="mb-3">
          <label for="Precio" class="form-label fs-4">
            Precio
          </label>
          <input
            id="precio"
            type="number"
            class="form-control"
            onChange={formik.handleChange}
            value={formik.values.precio}
          />
          {formik.errors.precio ? <div>{formik.errors.precio}</div> : null}
        </div>
        <div class="mb-3">
          <label for="imagen-cancion" class="form-label fs-4">
            Imagen
          </label>
          <input
            class="form-control"
            type="file"
            id="imagen-cancion"
            accept={tomarExtensionesPermitidas("imagen")}
            name="imagen"
            onChange={(e)=> {
              formik.setFieldValue("imagen", e.currentTarget.files[0])
            }}
          />
          {formik.errors.imagen ? <div>{formik.errors.imagen}</div> : null}
        </div>
        <div className="mb-3">
          <label for="genero" class="form-label fs-4">
            Genero
          </label>
          <select
            class="form-select"
            name="generoMusical"
            aria-label="Default select example"
            onChange={formik.handleChange}
            value={formik.values.generoMusical}
          >
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
          </select>
        </div>
        <div class="modal-footer border-top-0">
          <button type="submit" class="btn btn-secondary rounded-0">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
