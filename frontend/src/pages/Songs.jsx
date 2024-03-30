import {Card} from '../components/Card';
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

export const Songs = () => {
    const cards = canciones.map((cancion) => <Card key={cancion.id} cancion={cancion} />);
  return (
    <div className="container my-5">
      <h5 className="fs-3 my-3 fw-bold">Canciones Perfectas para el ritmo de la vida!</h5>
      <div className="w-100 d-flex flex-wrap flex-md-row flex-sm-column align-content-center justify-content-center justify-content-md-start  gap-3 me-auto">
        {cards}
      </div>
    </div>
  )
}