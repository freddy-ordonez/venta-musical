import { PaymentMethod } from "../components/user/PaymentMethod";
import { ProfileLeft } from "../components/user/ProfileLeft";
import { UserConfig } from "../components/user/UserConfig";
import { estadoUsuario } from "../store/userStore";
import * as Yup from "yup";
import { useFormik } from "formik";
import { number } from "card-validator";
import { useState } from "react";
import { Alert } from "../components/common/Alert";

export const Profile = () => {
  const [alerta, setAlerta] = useState({
    abrir: false,
    mensaje: "",
    tipo: "",
  });
  const usuario = estadoUsuario((state) => state.login);
  const usuarios = estadoUsuario((state) => state.usuarios);
  const { actualizarPerfil } = estadoUsuario();
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
      .required("El correo electrónico es requerido")
      .test("Correo Existente", "Este correo ya esta registrado", (value) =>
        validarCorreoExistente(usuario._id, value, usuarios)
      ),
  });

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
    useFormik({
      initialValues: {
        nombre,
        dni,
        contrasena,
        correoElectronico,
        numeroTarjeta,
      },
      validationSchema: validacionUsuario,
      onSubmit: async (values) => {
        const { nombre, dni, contrasena, correoElectronico, numeroTarjeta } =
          values;
        const usuarioActualizar = {
          ...usuario,
          nombre,
          dni,
          contrasena,
          correoElectronico,
        };
        usuarioActualizar.metodoPago.numeroTarjeta = numeroTarjeta;
        const usuarioFueActualizado = await actualizarPerfil(
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

  return (
    <div
      class="container rounded-0 mt-5 mb-5"
      style={{ backgroundColor: "#CFD6E5" }}
    >
      <form onSubmit={handleSubmit}>
        <div class="row">
          <ProfileLeft
            nombre={values.nombre}
            corroElectronico={values.correoElectronico}
          />
          <div class="col-md-5 border-right">
            <div class="p-3 py-5 fw-bold">
              {alerta.abrir ? (
                <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
              ) : null}
              <UserConfig
                values={values}
                handleChange={handleChange}
                errors={errors}
                setFieldValue={setFieldValue}
              />
              <hr className="my-5" />
              <PaymentMethod
                values={values}
                handleChange={handleChange}
                errors={errors}
              />
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

const validarCorreoExistente = (idUsuarioActual, correo, usuarios) => {
  const usuarioExistente = usuarios.find(
    (usuario) =>
      usuario._id !== idUsuarioActual && usuario.correoElectronico === correo
  );
  return !usuarioExistente;
};
