import { Card } from "../components/Card";
import { estadoCancion } from "../store/songStore";

export const Songs = () => {
  const canciones = estadoCancion((state) => state.canciones);

  const cards = canciones.map((cancion) => (
    <Card key={cancion._id} cancion={cancion} />
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
