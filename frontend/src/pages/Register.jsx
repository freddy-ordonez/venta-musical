import { Link } from "react-router-dom";

export const Register = () => {
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
                  <h2 class="text-uppercase text-center mb-5">
                    Crear Cuenta
                  </h2>

                  <form>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="nombre"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="nombre">
                        Nombre Completo
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="cedula"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="cedula">
                        Cedula
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="correoElectronico"
                        id="correoElectronico"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="correoElectronico">
                        Correo Electronico
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="contrasena"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="contrasena">
                        Contraseña
                      </label>
                    </div>

                    <div class="col-md-6 mb-4">
                      <h6 class="mb-2 pb-1">Genero: </h6>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="genero"
                          id="femenino"
                          value="option1"
                          checked
                        />
                        <label class="form-check-label" for="femenino">
                          Femenino
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="genero"
                          id="masculino"
                          value="option2"
                        />
                        <label class="form-check-label" for="masculino">
                          Masculino
                        </label>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="metodoPago"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="metodoPago">
                        Metodo Pago
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-dark btn-block btn-lg rounded-0 text-white"
                      >
                        Registrarse
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link
                        to="/login"
                        class="fw-bold text-body text-decoration-none"
                      >
                        Login here
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
