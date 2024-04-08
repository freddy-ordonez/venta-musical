import { ButtomMusic } from "./ButtonMusic";
import { Card } from "./Card";
import { ModalMusic } from "./ModalMusic";
import { estadoCancion } from "../store/songStore";
import { useEffect } from "react";
import { estadoUsuario } from "../store/userStore";

const usuario = {
  tipoUsuario: "Administrador",
};

export const Music = () => {
  const canciones = estadoCancion((state) => state.canciones);
  const usuario = estadoUsuario((state) => state.login);

  const tipoUsuario = !usuario ? "USUARIO" : usuario.tipoUsuario["tipoUsuario"];
  const cards = canciones.map((cancion) => (
    <Card key={cancion._id} cancion={cancion} />
  ));
  return (
    <div className="container my-5">
      <h5 className="fs-3 m-0 fw-bold">Experiencia Perfecta!</h5>
      <p className="fs-3 m-0 mb-3 fw-bold">
        Un sonido para cada tipo de persona
      </p>
      {tipoUsuario === "USUARIO" ? null : <ButtomMusic />}
      <div className="w-100 d-flex flex-wrap flex-md-row flex-sm-column align-content-center justify-content-center justify-content-md-start  gap-3 me-auto">
        {cards}
      </div>
      <ModalMusic />
    </div>
  );
};
