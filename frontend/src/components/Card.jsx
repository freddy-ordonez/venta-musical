import { useEffect, useRef } from "react";
import { estadoCarritoCompras } from "../store/cartShoopingStore";

export const Card = ({ cancion, tipoUsuario, children, deshabilitar }) => {
  const path = `http://localhost:4000/public/${cancion.imagen}`;
  const generoMusical = cancion.generoMusical;
  const { agregarCancioCarrito } = estadoCarritoCompras();

  const manejoAgregarCancionCarrito = () => {
    agregarCancioCarrito(cancion);
  };

  return (
    <div
      className="card border border-0 rounded-0 mt-2"
      style={{ width: "20rem", height: "30rem", backgroundColor: "#f1f0eb" }}
    >
      <img
        src={path}
        class="card-img-top rounded-0"
        alt="..."
        style={{ height: "30rem" }}
      />
      <div className="card-body border border-0 p-0">
        <h5 className="card-title mt-1 fs-1 fw-bold">{cancion.nombre}</h5>
        <p className="card-text m-0 fs-6 text-secondary fw-bold">
          Genero:
          <strong className="text-dark fs-5"> {generoMusical.nombre} </strong>
        </p>
        <p className="fs-6 text-secondary fw-bold">
          Precio:
          <strong className="text-dark fs-5"> {cancion.precio}</strong>
        </p>
        {tipoUsuario === "USUARIO" ? (
          <button
            disabled={deshabilitar}
            className="btn btn-secondary rounded-0"
            onClick={manejoAgregarCancionCarrito}
          >
            Añadir al carrito
          </button>
        ) : null}
        {children}
      </div>
    </div>
  );
};
