export const UserConfig = () => {
  return (
    <>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-right fs-3 fw-bold">Configuracion Perfil</h4>
      </div>
      <div class="row mt-2">
        <div class="col-md-6">
          <label class="labels">Nombre</label>
          <input
            type="text"
            class="form-control"
            value=""
          />
        </div>
        <div class="col-md-6">
          <label class="labels">Cedula</label>
          <input
            type="text"
            class="form-control"
            value=""
            disabled={true}
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <label class="labels">Contraseña</label>
          <input
            type="password"
            class="form-control"
            placeholder=""
            value="fgsfgsfd"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <label class="labels">Email</label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            value=""
          />
        </div>
      </div>
    </>
  );
};
