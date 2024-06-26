import { Link } from "react-router-dom";
import musica from "../assets/musica.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { estadoUsuario } from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "../components/common/Alert";

export const Login = () => {
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const { loginUsuario } = estadoUsuario();

  const validacionLogin = Yup.object().shape({
    correoElectronico: Yup.string().email(
      "El correo electrónico no tiene un formato válido"
    ),
    contrasena: Yup.string()
      .min(8, "Minimo 8 caracteres")
      .required("La contraseña es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      correoElectronico: "",
      contrasena: "",
    },
    validationSchema: validacionLogin,
    onSubmit: async (values, { resetForm }) => {
      const logeoExitoso = await loginUsuario(values);
      if (logeoExitoso) {
        navigate("/");
      } else {
        setAlert(!alert);
      }
      resetForm();
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    },
  });
  return (
    <section className="vh-100" style={{ backgroundColor: "#282C32" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card rounded-0">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={musica}
                    alt="login form"
                    className="img-fluid"
                    style={{ height: "100%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <Link className="fs-3 fw-bold text-decoration-none text-dark" to={"/"}>JF.Music</Link>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Inicia Sesión
                      </h5>
                      {alert ? (
                        <Alert
                          mensaje={"usuario o contraseña mal"}
                          tipo={"danger"}
                        />
                      ) : null}

                      <div className="form-outline mb-4">
                        {formik.errors.correoElectronico ? (
                          <div className="text-danger">
                            {formik.errors.correoElectronico}
                          </div>
                        ) : null}
                        <input
                          type="text"
                          id="correoElectronico"
                          value={formik.values.correoElectronico}
                          onChange={formik.handleChange}
                          className="form-control form-control-lg"
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
                          type="password"
                          id="contrasena"
                          value={formik.values.contrasena}
                          onChange={formik.handleChange}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Contraseña
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block rounded-0"
                          type="submit"
                        >
                          Inicia Sesión
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        No tienes una cuenta aún?{" "}
                        <Link to="/registrarse" style={{ color: "#393f81" }}>
                          Registrate aqui!
                        </Link>
                      </p>
                      <a href="#!" className="small text-muted">
                        Politica de privacidad
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
