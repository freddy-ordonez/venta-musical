import { estadoCarritoCompras } from "../../store/cartShoopingStore";

export const CardItemShooping = ({ cancion }) => {
  const { eliminarCancionCarrito } = estadoCarritoCompras();
  const path = "http://localhost:4000/public/";

  const manejoEliminarCancionCarrito = () => {
    eliminarCancionCarrito(cancion._id);
  };

  const { nombre, precio } = cancion;
  return (
    <>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={`${path}${cancion.imagen}`}
            className="img-fluid rounded-3"
            alt="Imagen Cancion"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">Nombre</h6>
          <h6 className="text-black mb-0">{nombre}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button className="btn btn-link px-2">
            <i className="fas fa-minus"></i>
          </button>

          <span>Cantidad 1</span>

          <button className="btn btn-link px-2">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="text-muted">Precio</h6>
          <h6 className="mb-0">€ {precio}</h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <button
            href="#!"
            className="text-muted border-0 bg-white"
            onClick={manejoEliminarCancionCarrito}
          >
            <span className="close">&#10005;</span>
          </button>
        </div>
      </div>

      <hr className="my-4" />
    </>
  );
};
