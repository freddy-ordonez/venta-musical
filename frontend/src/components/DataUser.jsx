import * as Yup from "yup";
import { useFormik } from "formik";
import { number } from "card-validator";
import { estadoUsuario } from "../store/userStore";
import usuarioFoto from "../assets/usuario.png";

export const DataUser = ({ usuario, tiposUsuarios, setAlerta }) => {
  const usuarios = estadoUsuario((state) => state.usuarios);
  const { actualizarUsuario, eliminarUsuario} = estadoUsuario();
  const {
    nombre,
    dni,
    correoElectronico,
    genero,
    contrasena,
    tipoUsuario,
    metodoPago,
  } = usuario;
  const { numeroTarjeta } = metodoPago;

  const tipoUser = tipoUsuario["_id"];

  const validacionUsuario = Yup.object().shape({
    nombre: Yup.string()
      .min(10, "Minimo 10 caracteres")
      .max(100, "Maximo 100 caracteres")
      .required("Nombre es requerido"),
    dni: Yup.string()
      .min(8, "Minimo 8 caracteres")
      .max(16, "Maximo 21 caracteres")
      .required("La cedula es requerida"),
    numeroTarjeta: Yup.string()
      .test("Validar tarjeta", "Tarjeta Invalida", (value) =>
        validarTarjeta(value)
      )
      .required("El metodo de pago es requerido"),
    contrasena: Yup.string()
      .required("La contraseña es requerida"),
    correoElectronico: Yup.string()
      .email("El correo electrónico no tiene un formato válido")
      .required("El correo electrónico es requerido")
      .test("Correo Existente", "Este correo ya esta registrado", (value) =>
        validarCorreoExistente(usuario._id, value, usuarios)
      ),
    genero: Yup.string()
      .required("El genero es requerido")
      .matches(/^[MF]$/, "Solo M o F"),
  });

  const { values, handleChange, handleSubmit, errors, setFieldValue} = useFormik({
    initialValues: {
      nombre,
      dni,
      correoElectronico,
      contrasena,
      numeroTarjeta,
      genero,
      tipoUsuario: tipoUser,
    },
    validationSchema: validacionUsuario,
    onSubmit: async (values, { resetForm }) => {
      console.log("entro");
      const {
        nombre,
        dni,
        contrasena,
        correoElectronico,
        numeroTarjeta,
        genero,
        tipoUsuario,
      } = values;
      const usuarioActualizar = {
        ...usuario,
        nombre,
        dni,
        contrasena,
        correoElectronico,
        genero,
        tipoUsuario,
      };
      usuarioActualizar.metodoPago.numeroTarjeta = numeroTarjeta;
      const usuarioFueActualizado = await actualizarUsuario(
        usuarioActualizar._id,
        usuarioActualizar
      );
      if (usuarioFueActualizado)
        setAlerta({
          abrir: usuarioFueActualizado,
          mensaje: "Se actualizo correctamente",
          tipo: "success",
        });
      else
        setAlerta({
          abrir: usuarioFueActualizado,
          mensaje: "Hubo un problema al actualizar el usuario",
          tipo: "danger",
        });
      setTimeout(() => {
        setAlerta({ abrir: false });
      }, 4000);
    },
  });

  const manejoClickBorrar = async () => {
    const data = eliminarUsuario(usuario._id);
    if (data) {
      setAlerta({
        abrir: true,
        mensaje: "Se elimino correctamente",
        tipo: "success",
      }); 
    }else {
      setAlerta({
        abrir: true,
        mensaje: "Se actualizo correctamente",
        tipo: "success",
      });
    }
    setTimeout(() => {
      setAlerta({ abrir: false });
    }, 4000);
  };

  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={usuarioFoto}
              alt="Usuario Foto"
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <input
                type="text"
                className="fw-bold mb-1 border-0 data-disable"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
              />
              {errors.nombre ? (
                <div className="text-danger">{errors.nombre}</div>
              ) : null}
              <input
                type="text"
                className="d-block text-muted mb-0 border-0 data-disable"
                name="correoElectronico"
                value={values.correoElectronico}
                onChange={handleChange}
              />
              {errors.correoElectronico ? (
                <div className="text-danger">{errors.correoElectronico}</div>
              ) : null}
              <input
                type="text"
                className="d-block text-muted mb-0 border-0 data-disable"
                name="contrasena"
                value={values.contrasena}
                onFocus={()=> {setFieldValue("contrasena", "")}}
                onChange={handleChange}
              />
              {errors.contrasena ? (
                <div className="text-danger">{errors.contrasena}</div>
              ) : null}
            </div>
          </div>
        </td>
        <td>
          <input
            className="fw-normal mb-1 border-0 data-disable"
            name="dni"
            value={values.dni}
            onChange={handleChange}
            disabled
          />
          {errors.dni ? <div className="text-danger">{errors.dni}</div> : null}
          <input
            className="d-block text-muted border-0 mb-0 data-disable "
            name="genero"
            value={values.genero}
            onChange={handleChange}
          />
          {errors.genero ? (
            <div className="text-danger">{errors.genero}</div>
          ) : null}
        </td>
        <td>
          <select
            className="btn btn-dark text-white border border-0 rounded-0"
            // disabled
            name="tipoUsuario"
            value={values.tipoUsuario}
            onChange={handleChange}
          >
            {tiposUsuarios?.map((t) => (
              <option
                key={t._id}
                value={t._id}
                id="tipoUsuario"
                className="border-0 rounded-0"
              >
                {t.tipoUsuario}
              </option>
            ))}
          </select>
        </td>
        <td>
          <input
            className="fw-normal mb-1 border-0 data-disable"
            name="numeroTarjeta"
            value={values.numeroTarjeta}
            onChange={handleChange}
          />
          {errors.numeroTarjeta ? (
            <div className="text-danger">{errors.numeroTarjeta}</div>
          ) : null}
        </td>
        <td>
          <button
            type="submit"
            className="btn btn-dark rounded-0 ms-lg-3"
            onClick={handleSubmit}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-dark rounded-0 ms-lg-3"
            onClick={manejoClickBorrar}
          >
            Borrar
          </button>
        </td>
      </tr>
    </>
  );
};

const validarTarjeta = (tarjeta) => {
  const opciones = ["mastercard", "visa", "american-express"];

  // Validar el número de tarjeta
  const resultadoValidacion = number(tarjeta);

  // Verifica si el número de tarjeta es válido y si pertenece a alguna de las marcas especificadas
  if (resultadoValidacion.isValid) {
    return opciones.includes(resultadoValidacion.card.type);
  }

  return false;
};

const validarCorreoExistente = (idUsuarioActual, correo, usuarios) => {
  const usuarioExistente = usuarios.find(
    (usuario) =>
      usuario._id !== idUsuarioActual && usuario.correoElectronico === correo
  );
  return !usuarioExistente;
};
