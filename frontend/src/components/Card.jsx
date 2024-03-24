const datosCanciones = ["Genero", "Precio"];

export const Card = ({cancion}) => {
  return (
    <div
      className="card border border-0 rounded-0"
      style={{ width: "20rem", height: "30rem", backgroundColor: "#f1f0eb" }}
    >
      <img
        src="https://media-front.elmostrador.cl/2023/03/DarkSide-700x466.jpg"
        class="card-img-top rounded-0"
        alt="..."
        style={{ height: "30rem" }}
      />
      <div className="card-body border border-0 p-0">
        <h5 className="card-title mt-1 fs-1 fw-bold">{cancion.nombre}</h5>
        <p className="card-text m-0 fs-6 text-secondary fw-bold">
          {`${datosCanciones[0]}:`}{" "}
          <strong className="text-dark fs-5"> {cancion.generoMusical} </strong>
        </p>
        <p className="fs-6 text-secondary fw-bold">{`${datosCanciones[1]}:`} <strong className="text-dark fs-5"> {cancion.precio}</strong></p>
        <a href="#" className="btn btn-secondary rounded-0">
          Añadir al carrito
        </a>
      </div>
    </div>
  );
};
