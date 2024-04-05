import { useFormik } from "formik";
import * as Yup from "yup";
import { estadoGeneroMusical } from "../store/genMusicStore";
import { useState } from "react";
import { Alert } from "./Alert";

export const FormGen = () => {
  const [alert, setAlert] = useState({
    isOpen: false,
    mensaje: "",
    tipo: ""
  });
  const { agregarGenero } = estadoGeneroMusical();

  const esquemaValidacion = Yup.object().shape({
    nombre: Yup.string().required("El nombre es obligatorio"),
    descripcion: Yup.string()
      .min(30, "Minimo 30 caracteres")
      .max(250, "Max 250 caracteres")
      .required("El obligatario la descripcion"),
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: "",
    },
    validationSchema: esquemaValidacion,
    onSubmit: async (values,{resetForm}) => {
      const {mensaje, tipo} = await agregarGenero(values);
      resetForm()
      setAlert({isOpen: true, mensaje, tipo})
      setTimeout(()=> {
        setAlert({isOpen: false, mensaje: "", tipo: ""})
      }, 3000)
    },
  });

  return (
    <div>
      {!alert.isOpen ? null : <Alert mensaje={alert.mensaje} tipo={alert.tipo} /> }
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label htmlFor="Nombre" class="form-label fs-4">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
          {formik.errors.nombre ? (
            <div className="text-danger">{formik.errors.nombre}</div>
          ) : null}
        </div>
        <div class="mb-3">
          <label htmlFor="descripcion" class="form-label fs-4">
            Descripcion
          </label>
          <textarea
            id="descripcion"
            type="text"
            class="form-control"
            onChange={formik.handleChange}
            value={formik.values.descripcion}
            rows={10}
            style={{ resize: "none" }}
          />
          {formik.errors.descripcion ? (
            <div className="text-danger">{formik.errors.descripcion}</div>
          ) : null}
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
