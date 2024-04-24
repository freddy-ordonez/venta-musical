import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { number } from "card-validator";
import * as Yup from "yup";
import { estadoUsuario } from "../store/userStore";

export const Register = () => {
  const {usuarios, tiposUsuarios}= estadoUsuario();
  const usuarioTipo = tiposUsuarios.find(t => t.tipoUsuario === "USUARIO")

  const navigate = useNavigate();

  const validacionUsuario = Yup.object().shape({
    nombre: Yup.string()
      .min(10, "Minimo 10 caracteres")
      .max(100, "Maximo 100 caracteres")
      .required("Nombre es requerido"),
    dni: Yup.string()
      .min(8, "Minimo 8 caracteres")
      .max(21, "Maximo 21 caracteres")
      .required("La cedula es requerida")
      .test("Cedula existente", "Esta cedula ya esta registrada", (value) =>
        validarCedulaExistente(value, usuarios)
      ),
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
        validarCorreoExistente(value, usuarios)
      ),
    genero: Yup.string().required("Genero el requerido"),
  });

  const { agregarUsuario } = estadoUsuario();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      dni: "",
      numeroTarjeta: "",
      contrasena: "",
      correoElectronico: "",
      genero: "",
    },
    validationSchema: validacionUsuario,
    onSubmit: (values, { resetForm }) => {
      const tipoTarjeta = number(values.numeroTarjeta).card.type.toUpperCase();
      const usuario = {
        ...values,
        tipoPago: tipoTarjeta,
        tipoUsuario: usuarioTipo._id,
      };
      agregarUsuario(usuario);
      navigate(-1);
    },
  });

  const manejoRadioGenero = (e) => {
    formik.setFieldValue("genero", e.target.value);
  };
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card rounded-0">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-3">Crear Cuenta</h2>

                  <form onSubmit={formik.handleSubmit}>
                    {formik.errors.nombre ? (
                      <div className="text-danger">{formik.errors.nombre}</div>
                    ) : null}
                    <div className="form-outline mb-4">
                      <input
                        id="nombre"
                        type="text"
                        className="form-control form-control-lg"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                      />
                      <label className="form-label" htmlFor="nombre">
                        Nombre Completo
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      {formik.errors.dni ? (
                        <div className="text-danger">{formik.errors.dni}</div>
                      ) : null}
                      <input
                        id="dni"
                        type="text"
                        className="form-control form-control-lg"
                        value={formik.values.dni}
                        onChange={formik.handleChange}
                      />
                      <label className="form-label" htmlFor="cedula">
                        Cedula
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      {formik.errors.correoElectronico ? (
                        <div className="text-danger">
                          {formik.errors.correoElectronico}
                        </div>
                      ) : null}
                      <input
                        id="correoElectronico"
                        type="text"
                        className="form-control form-control-lg"
                        value={formik.values.correoElectronico}
                        onChange={formik.handleChange}
                      />
                      <label className="form-label" htmlFor="correoElectronico">
                        Correo Electronico
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      {formik.errors.contrasena ? (
                        <div className="text-danger">
                          {formik.errors.contrasena}
                        </div>
                      ) : null}
                      <input
                        id="contrasena"
                        type="password"
                        className="form-control form-control-lg"
                        value={formik.values.contrasena}
                        onChange={formik.handleChange}
                      />
                      <label className="form-label" htmlFor="contrasena">
                        Contraseña
                      </label>
                    </div>

                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Genero: </h6>

                      <div className="form-check form-check-inline">
                        {formik.errors.genero ? (
                          <div className="text-danger">
                            {formik.errors.genero}
                          </div>
                        ) : null}
                        <input
                          id="genero"
                          className="form-check-input"
                          type="radio"
                          name="genero"
                          value="F"
                          onChange={manejoRadioGenero}
                        />
                        <label className="form-check-label" htmlFor="femenino">
                          Femenino
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          id="genero"
                          className="form-check-input"
                          type="radio"
                          name="genero"
                          value="M"
                          onChange={manejoRadioGenero}
                        />
                        <label className="form-check-label" htmlFor="masculino">
                          Masculino
                        </label>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      {formik.errors.numeroTarjeta ? (
                        <div className="text-danger">
                          {formik.errors.numeroTarjeta}
                        </div>
                      ) : null}
                      <input
                        type="text"
                        id="numeroTarjeta"
                        className="form-control form-control-lg"
                        value={formik.values.numeroTarjeta}
                        onChange={formik.handleChange}
                      />
                      <label className="form-label" htmlFor="metodoPago">
                        Metodo Pago
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-dark btn-block btn-lg rounded-0 text-white"
                      >
                        Registrarse
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Ya tienes una cuenta?
                      <Link
                        to="/login"
                        className="fw-bold text-body text-decoration-none ms-1"
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

const validarCedulaExistente = (cedula, usuarios) => {
  const usuarioExistente = usuarios.find((usuario) => usuario.dni === cedula);
  return !usuarioExistente;
};

const validarCorreoExistente = (correo, usuarios) => {
  const usuarioExistente = usuarios.find(
    (usuario) => usuario.correoElectronico === correo
  );
  return !usuarioExistente;
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
