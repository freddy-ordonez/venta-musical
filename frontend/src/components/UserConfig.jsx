
export const UserConfig = ({values, handleChange}) => {

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
            id="nombre"
            value={values.nombre}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label class="labels">Cedula</label>
          <input
            type="text"
            class="form-control"
            value={values.dni}
            disabled={true}
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <label class="labels">Contraseña</label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            id='contrasena'
            value={values.contrasena}
            onChange={handleChange}
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <label class="labels">Email</label>
          <input
            type="text"
            class="form-control"
            id='correoElectronico'
            value={values.correoElectronico}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

