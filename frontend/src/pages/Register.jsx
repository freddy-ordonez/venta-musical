import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { number } from "card-validator";
import * as Yup from "yup";
import { estadoUsuario } from "../store/userStore";

export const Register = () => {
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
      .required("El correo electrónico es requerido"),
      genero: Yup.string().required("Genero el requerido")
  });

  const {agregarUsuario} = estadoUsuario();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      dni: "",
      numeroTarjeta: "",
      contrasena: "",
      correoElectronico: "",
      genero: ""
    },
    validationSchema: validacionUsuario,
    onSubmit: (values, {resetForm}) => {
      const tipoTarjeta = number(values.numeroTarjeta).card.type.toUpperCase();
      const usuario = {...values, tipoPago: tipoTarjeta, tipoUsuario: "660e1bd1021306d71c23cd9b"};
      console.log(usuario);
      agregarUsuario(usuario);
      resetForm()
    },
  });

  const manejoRadioGenero = (e) => {
    formik.setFieldValue("genero", e.target.value);
  };
  return (
    <section
      class="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card rounded-0">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-3">Crear Cuenta</h2>

                  <form onSubmit={formik.handleSubmit}>
                  {formik.errors.nombre ? (
                        <div className="text-danger">
                          {formik.errors.nombre}
                        </div>
                      ) : null}
                    <div class="form-outline mb-4">
                      <input
                        id="nombre"
                        type="text"
                        class="form-control form-control-lg"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                      />
                      <label class="form-label" for="nombre">
                        Nombre Completo
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                    {formik.errors.dni ? (
                        <div className="text-danger">
                          {formik.errors.dni}
                        </div>
                      ) : null}
                      <input
                        id="dni"
                        type="text"
                        class="form-control form-control-lg"
                        value={formik.values.dni}
                        onChange={formik.handleChange}
                      />
                      <label class="form-label" for="cedula">
                        Cedula
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                    {formik.errors.correoElectronico ? (
                        <div className="text-danger">
                          {formik.errors.correoElectronico}
                        </div>
                      ) : null}
                      <input
                        id="correoElectronico"
                        type="text"
                        class="form-control form-control-lg"
                        value={formik.values.correoElectronico}
                        onChange={formik.handleChange}
                      />
                      <label class="form-label" for="correoElectronico">
                        Correo Electronico
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                    {formik.errors.contrasena ? (
                        <div className="text-danger">
                          {formik.errors.contrasena}
                        </div>
                      ) : null}
                      <input
                        id="contrasena"
                        type="password"
                        class="form-control form-control-lg"
                        value={formik.values.contrasena}
                        onChange={formik.handleChange}
                      />
                      <label class="form-label" for="contrasena">
                        Contraseña
                      </label>
                    </div>

                    <div class="col-md-6 mb-4">
                      <h6 class="mb-2 pb-1">Genero: </h6>

                      <div class="form-check form-check-inline">
                      {formik.errors.genero ? (
                        <div className="text-danger">
                          {formik.errors.genero}
                        </div>
                      ) : null}
                        <input
                          id="genero"
                          class="form-check-input"
                          type="radio"
                          name="genero"
                          value="F"
                          onChange={manejoRadioGenero}
                        />
                        <label class="form-check-label" for="femenino">
                          Femenino
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          id="genero"
                          class="form-check-input"
                          type="radio"
                          name="genero"
                          value="M"
                          onChange={manejoRadioGenero}
                        />
                        <label class="form-check-label" for="masculino">
                          Masculino
                        </label>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      {formik.errors.numeroTarjeta ? (
                        <div className="text-danger">
                          {formik.errors.numeroTarjeta}
                        </div>
                      ) : null}
                      <input
                        type="text"
                        id="numeroTarjeta"
                        class="form-control form-control-lg"
                        value={formik.values.numeroTarjeta}
                        onChange={formik.handleChange}
                      />
                      <label class="form-label" for="metodoPago">
                        Metodo Pago
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-dark btn-block btn-lg rounded-0 text-white"
                      >
                        Registrarse
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Ya tienes una cuenta?
                      <Link
                        to="/login"
                        class="fw-bold text-body text-decoration-none ms-1"
                      >
                        Inicia Sesión Aqui
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
