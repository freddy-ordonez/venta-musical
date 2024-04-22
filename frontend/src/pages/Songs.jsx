import { useEffect } from "react";
import { Card } from "../components/Card";
import { estadoCancion } from "../store/songStore";
import { estadoUsuario } from "../store/userStore";

export const Songs = () => {
  const { canciones, eliminarCancionId} = estadoCancion();
  const { login } = estadoUsuario();
  const tipoUsuario = login?.tipoUsuario["tipoUsuario"];
  const arrayCancionesUsuario = login?.canciones.map(c => c._id)
  console.log(canciones);

  const cards = canciones.map((cancion) => (
    <Card key={cancion._id} cancion={cancion}>
      {tipoUsuario === "ADMINISTRADOR" ? (
        <button
          className="btn btn-secondary rounded-0"
          onClick={() => {eliminarCancionId(cancion._id)}}
        >
          Eliminar
        </button>
      ) : (
        <button className="btn btn-secondary rounded-0" disabled={arrayCancionesUsuario.includes(cancion._id)}>
          Añadir al carrito
        </button>
      )}
    </Card>
  ));


  return (
    <div className="container my-5">
      <h5 className="fs-3 my-3 fw-bold">
        Canciones Perfectas para el ritmo de la vida!
      </h5>
      <div className="w-100 d-flex flex-wrap flex-md-row flex-sm-column align-content-center justify-content-center justify-content-md-start  gap-3 me-auto">
        {cards}
      </div>
    </div>
  );
};
