import { Card } from "../components/common/Card";
import { estadoUsuario } from "../store/userStore";

export const SongsUser = () => {
  const { login } = estadoUsuario();
  return (
    <>
      <div className="container my-5">
        <h5 className="fs-3 my-3 fw-bold">Mis Canciones!</h5>
        <div className="w-100 d-flex flex-wrap flex-md-row flex-sm-column align-content-center justify-content-center justify-content-md-start  gap-3 me-auto">
          {login?.canciones.map((c) => (
            <Card cancion={c} tipoUsuario={""} />
          ))}
        </div>
      </div>
    </>
  );
};
