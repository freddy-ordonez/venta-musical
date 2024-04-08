import { PaymentMethod } from "../components/PaymentMethod";
import { ProfileLeft } from "../components/ProfileLeft";
import { UserConfig } from "../components/UserConfig";
import { estadoUsuario } from "../store/userStore";
import * as Yup from "yup";
import { useFormik } from "formik";
import { number } from "card-validator";

export const Profile = () => {
  const usuario = estadoUsuario((state) => state.login);
  const { nombre, dni, contrasena, correoElectronico, metodoPago } = usuario;
  const { numeroTarjeta } = metodoPago;

  const validacionUsuario = Yup.object().shape({
    nombre: Yup.string()
      .min(10, "Minimo 10 caracteres")
      .max(100, "Maximo 100 caracteres")
      .required("Nombre es requerido"),
    numeroTarjeta: Yup.string()
      .test("Validar tarjeta", "Tarjeta Invalida", (value) =>
        validarTarjeta(value)
      )
      .required("El metodo de pago es requerido"),
    contrasena: Yup.string()
      .min(8, "Minimo 8 caracteres")
      .max(12, "Maximo 12 caracteres")
      .required("La contraseña es requerida"),
    correoElectronico: Yup.string()
      .email("El correo electrónico no tiene un formato válido")
      .required("El correo electrónico es requerido"),
    // .test("Correo Existente", "Este correo ya esta registrado", (value) =>
    //   // validarCorreoExistente(value, usuarios)
    // )
  });

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre,
      dni,
      contrasena,
      correoElectronico,
      numeroTarjeta
    },
    validationSchema: validacionUsuario,
    onSubmit: (values, { resetForm }) => {
      // const tipoTarjeta = number(values.numeroTarjeta).card.type.toUpperCase();
      // const usuario = {
      //   ...values,
      //   tipoPago: tipoTarjeta,
      //   tipoUsuario: "660e1bd1021306d71c23cd9b",
      // };
      // console.log(usuario);
      // agregarUsuario(usuario);
      resetForm();
    },
  });

  return (
    <div
      class="container rounded-0 mt-5 mb-5"
      style={{ backgroundColor: "#CFD6E5" }}
    >
      <form onSubmit={handleSubmit}>
      <div class="row">
          <ProfileLeft nombre={values.nombre} corroElectronico={values.correoElectronico}/>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5 fw-bold">
              <UserConfig values={values} handleChange={handleChange} />
              <hr className="my-5" />
              <PaymentMethod values={values} handleChange={handleChange} />
              <div class="mt-5 text-right">
                <button
                  class="btn btn-dark rounded-0 fs-5 fw-bold "
                  type="submit"
                >
                  Guardar Pefil
                </button>
              </div>
            </div>
          </div>
      </div>
      </form>
    </div>
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

const validarCorreoExistente = (correo, usuarios) => {
  const usuarioExistente = usuarios.find(
    (usuario) => usuario.correoElectronico === correo
  );
  return !usuarioExistente;
};
