import * as Yup from "yup";
import {useFormik} from 'formik'
import { number } from "card-validator";
import { estadoUsuario } from "../store/userStore";
import { redirectDocument } from "react-router-dom";

export const DataUser = ({ usuario }) => {

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
  const validacionUsuario = Yup.object().shape({
    nombre: Yup.string()
      .min(10,"Minimo 10 caracteres")
      .max(100,"Maximo 100 caracteres")
      .required("Nombre es requerido"),
    dni: Yup.string()
      .min(8,"Minimo 8 caracteres")
      .max(21,"Maximo 21 caracteres")
      .required("La cedula es requerida"),
    numeroTarjeta: Yup.string()
      .test("Validar tarjeta", "Tarjeta Invalida", (value) =>
        validarTarjeta(value)
      )
      .required("El metodo de pago es requerido"),
    contrasena: Yup.string()
      .min(8,"Minimo 8 caracteres")
      .max(12,"Maximo 12 caracteres")
      .required("La contraseña es requerida"),
    correoElectronico: Yup.string()
      .email("El correo electrónico no tiene un formato válido")
      .required("El correo electrónico es requerido")
  });

  const {agregarUsuario} = estadoUsuario();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      dni: "",
      numeroTarjeta: "",
      contrasena: "",
      correoElectronico: "",
    },
    validationSchema: validacionUsuario,
    onSubmit: (values, {resetForm}) => {
      const tipoTarjeta = number(values.numeroTarjeta).card.type.toUpperCase();
      const usuario = {...values, tipoPago: tipoTarjeta, tipoUsuario: "660e1bd1021306d71c23cd9b"};
      console.log(usuario);
      agregarUsuario(usuario);
      resetForm()
      return redirectDocument("/")
    },
  });
  
  return (
    <>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              class="rounded-circle"
            />
            <div class="ms-3">
              <input
                type="text"
                class="fw-bold mb-1 border-0 data-disable"
                placeholder="Freddy Ordonez Aguilar"
                disabled
              />
              <input
                type="text"
                class="d-block text-muted mb-0 border-0 data-disable"
                placeholder="john.doe@gmail.com"
                disabled
              />
              <input
                type="text"
                class="d-block text-muted mb-0 border-0 data-disable"
                placeholder="john.doe@gmail.com"
                disabled
              />
            </div>
          </div>
        </td>
        <td>
          <input
            class="fw-normal mb-1 border-0 data-disable"
            placeholder="1111111111"
            disabled
          />
          <input
            class="d-block text-muted border-0 mb-0 data-disable "
            placeholder="M"
            disabled
          />
        </td>
        <td>
          <select
            className="btn btn-dark text-white border border-0 rounded-0"
            disabled
          >
            <option value="ADMINISTRADOR" className="border-0 rounded-0">
              Administrador
            </option>
            <option value="USUARIO" className="border-0 rounded-0">
              Usuario
            </option>
          </select>
        </td>
        <td>
          <input
            class="fw-normal mb-1 border-0 data-disable"
            placeholder="1111111111"
            disabled
          />
        </td>
        <td>
          <button type="button" class="btn btn-dark rounded-0">
            Edit
          </button>
          <button type="button" class="btn btn-dark rounded-0 ms-lg-3" disabled>
            Save
          </button>
        </td>
      </tr>
    </>
  );
};
