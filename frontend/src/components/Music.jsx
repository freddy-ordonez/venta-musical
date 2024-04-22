import { ButtomMusic } from "./ButtonMusic";
import { Card } from "./Card";
import { ModalMusic } from "./ModalMusic";
import { estadoCancion } from "../store/songStore";
import { useEffect, useState } from "react";
import { estadoUsuario } from "../store/userStore";
import { Alert } from "./Alert";

export const Music = () => {
  const {canciones, eliminarCancion} = estadoCancion();
  const usuario = estadoUsuario((state) => state.login);
  const arrayCancionesUsuario = usuario?.canciones.map(c => c._id)

  const [alert, setAlert] = useState({
    abrir: false,
    mensaje: "",
    tipo: "",
  });

  const manejoClickEliminar = (id) => {
    eliminarCancion(id);
  };

  const tipoUsuario = !usuario ? "USUARIO" : usuario.tipoUsuario["tipoUsuario"];
  const cards = canciones?.map((cancion) => (
    <Card
      key={cancion._id}
      cancion={cancion}
      tipoUsuario={tipoUsuario}
      manejoClickEliminar={manejoClickEliminar}
      deshabilitar={usuario ? arrayCancionesUsuario.includes(cancion._id) : false}
    />
  ));

  return (
    <div className="container my-5">
      <h5 className="fs-3 m-0 fw-bold">Experiencia Perfecta!</h5>
      <p className="fs-3 m-0 mb-3 fw-bold">
        Un sonido para cada tipo de persona
      </p>
      {tipoUsuario === "USUARIO" ? null : <ButtomMusic />}
      {alert.abrir ? <Alert mensaje={alert.mensaje} tipo={alert.tipo} /> : null}
      <div className="w-100 d-flex flex-wrap flex-md-row flex-sm-column align-content-center justify-content-center justify-content-md-start  gap-3 me-auto">
        {cards}
      </div>
      <ModalMusic />
    </div>
  );
};
