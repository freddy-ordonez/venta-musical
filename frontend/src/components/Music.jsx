import { ButtomMusic } from "./ButtonMusic";
import { Card } from "./Card";
import { ModalMusic } from "./ModalMusic";

const usuario = {
  tipoUsuario: "Administrador",
};

const canciones = [
  {
    id: 1,
    nombre: "Numb",
    precio: 4.99,
    generoMusical: "Rock",
  },
  {
    id: 2,
    nombre: "Numb",
    precio: 4.99,
    generoMusical: "Rock",
  },
  {
    id: 3,
    nombre: "Numb",
    precio: 4.99,
    generoMusical: "Rock",
  },
  {
    id: 4,
    nombre: "Numb",
    precio: 4.99,
    generoMusical: "Rock",
  },
  {
    id: 5,
    nombre: "Numb",
    precio: 4.99,
    generoMusical: "Rock",
  },
];

export const Music = () => {
  const cards = canciones.map((cancion) => <Card key={cancion.id} cancion={cancion} />);
  return (
    <div className="container my-5">
      <h5 className="fs-3 m-0 fw-bold">Experiencia Perfecta!</h5>
      <p className="fs-3 m-0 mb-3 fw-bold">Un sonido para cada tipo de persona</p>
      {usuario.tipoUsuario === "Usuario" ? null : <ButtomMusic />}
      <div className="w-100 d-flex flex-wrap flex-md-row flex-sm-column align-content-center justify-content-center justify-content-md-start  gap-3 me-auto">
        {cards}
      </div>
      <ModalMusic />
    </div>
  );
};
