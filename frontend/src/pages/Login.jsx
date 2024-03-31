import { Link } from "react-router-dom";
import musica from "../assets/musica.png";

export const Login = () => {
  return (
    <section class="vh-100" style={{ backgroundColor: "#282C32" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card rounded-0">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={musica}
                    alt="login form"
                    class="img-fluid"
                    style={{ height: "100%" }}
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <h1 className="fs-3 fw-bold">JF.Music</h1>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Inicia Sesión
                      </h5>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17">
                          Correo Electronico
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example27">
                          Contraseña
                        </label>
                      </div>

                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block rounded-0"
                          type="button"
                        >
                          Inicia Sesión
                        </button>
                      </div>
                      <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        No tienes una cuenta aún?{" "}
                        <Link to="/registrarse" style={{ color: "#393f81" }}>
                          Registrate aqui!
                        </Link>
                      </p>
                      <a href="#!" class="small text-muted">
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
