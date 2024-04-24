export const UserConfig = ({ values, handleChange, errors, setFieldValue }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-right fs-3 fw-bold">Configuracion Perfil</h4>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <label className="labels">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={values.nombre}
            onChange={handleChange}
          />
          {errors.nombre ? (
            <div className="text-danger">{errors.nombre}</div>
          ) : null}
        </div>
        <div className="col-md-6">
          <label className="labels">Cedula</label>
          <input
            type="text"
            className="form-control"
            value={values.dni}
            disabled={true}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <label className="labels">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder=""
            id="contrasena"
            value={values.contrasena}
            onChange={handleChange}
            onFocus={()=> setFieldValue("contrasena", "")}
          />
          {errors.contrasena ? (
            <div className="text-danger">{errors.contrasena}</div>
          ) : null}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <label className="labels">Email</label>
          <input
            type="text"
            className="form-control"
            id="correoElectronico"
            value={values.correoElectronico}
            onChange={handleChange}
          />
          {errors.correoElectronico ? (
            <div className="text-danger">{errors.correoElectronico}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};
