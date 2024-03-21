import { Card } from "./Card";

const usuario = {
  tipoUsuario: "U",
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
  const cards = canciones.map((cancion) => <Card key={cancion.id} />);
  return (
    <div className="container">
      <div className="w-100 d-flex flex-md-row flex-sm-column flex-wrap align-items-center justify-content-center gap-4">
        {cards}
      </div>
    </div>
  );
};
