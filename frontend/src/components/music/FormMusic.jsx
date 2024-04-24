import { useFormik } from "formik";
import * as Yup from "yup";
import { estadoGeneroMusical } from "../../store/genMusicStore";
import { useEffect, useState } from "react";
import { estadoCancion } from "../../store/songStore";
import { Alert } from "../common/Alert";

export const FormMusic = () => {
  const { todosGeneros } = estadoGeneroMusical();
  const generos = estadoGeneroMusical((state) => state.generos);
  const { agregarCancion } = estadoCancion();

  const [alert, setAlert] = useState({
    abrir: false,
    mensaje: "",
    tipo: "",
  });

  const validacionExtensiones = {
    imagen: ["jpg", "png", "jpeg"],
  };

  function validarTipoArchivo(nombreArchivo, tipoArchivo) {
    return (
      nombreArchivo &&
      validacionExtensiones[tipoArchivo].indexOf(
        nombreArchivo.split(".").pop()
      ) > -1
    );
  }

  function tomarExtensionesPermitidas(tipo) {
    return validacionExtensiones[tipo].map((e) => `.${e}`).toString();
  }

  const MAX_FILE_SIZE = 1024 * 1024 * 2;

  const esquemaValidacion = Yup.object().shape({
    nombre: Yup.string()
      .required("El nombre es obligatorio")
      .max(18, "Maximo de caracteres 18"),
    precio: Yup.number("Solo numeros").required("El precio es obligatorio"),
    generoMusical: Yup.string().required("Seleccione un genero"),
    imagen: Yup.mixed()
      .required("La imagen de la cancion es obligatorio")
      .test(
        "is-valid-type",
        `Extensiones permitidas ${validacionExtensiones.imagen.join(",")}`,
        (value) =>
          validarTipoArchivo(value && value.name.toLowerCase(), "imagen")
      )
      .test(
        "is-valid-size",
        "Maximo permitido 2 mb",
        (value) => value && value.size <= MAX_FILE_SIZE
      ),
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: 0,
      generoMusical: "",
      imagen: null,
    },
    validationSchema: esquemaValidacion,
    onSubmit: async (values, { resetForm }) => {
      const formulario = new FormData();
      formulario.append("imagen", values.imagen);
      formulario.append("nombre", values.nombre);
      formulario.append("precio", values.precio);
      formulario.append("generoMusical", values.generoMusical);
      const cancionAgregada = await agregarCancion(formulario);
      resetForm();
      if (cancionAgregada) {
        setAlert({
          abrir: true,
          mensaje: "La cancion se agrego exitosamente",
          tipo: "success",
        });
      } else {
        setAlert({
          abrir: true,
          mensaje: "Hubo un problema al agregar la cancion",
          tipo: "danger",
        });
      }
      setTimeout(() => {
        setAlert({ abrir: false });
      }, 3000);
    },
  });

  useEffect(() => {
    todosGeneros();
  }, []);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {alert ? <Alert mensaje={alert.mensaje} tipo={alert.tipo} /> : null}
        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label fs-4">
            Nombre
          </label>
          <input
            type="Nombre"
            className="form-control"
            name="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
          {formik.errors.nombre ? (
            <div className="text-danger">{formik.errors.nombre}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="Precio" className="form-label fs-4">
            Precio
          </label>
          <input
            name="precio"
            type="number"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.precio}
          />
          {formik.errors.precio ? (
            <div className="text-danger">{formik.errors.precio}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="imagen-cancion" className="form-label fs-4">
            Imagen
          </label>
          <input
            className="form-control"
            type="file"
            id="imagen-cancion"
            accept={tomarExtensionesPermitidas("imagen")}
            name="imagen"
            onChange={(e) => {
              formik.setFieldValue("imagen", e.currentTarget.files[0]);
            }}
          />
          {formik.errors.imagen ? (
            <div className="text-danger">{formik.errors.imagen}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label fs-4">
            Genero
          </label>
          {formik.errors.generoMusical ? (
            <div className="text-danger">{formik.errors.generoMusical}</div>
          ) : null}
          <select
            className="form-select"
            name="generoMusical"
            aria-label="Default select example"
            onChange={formik.handleChange}
            value={formik.values.generoMusical}
          >
            <option value="" defaultChecked>
              Seleccione el genero
            </option>
            {generos.map((g) => (
              <option key={g._id} value={g._id}>
                {g.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-footer border-top-0">
          <button type="submit" className="btn btn-secondary rounded-0">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
