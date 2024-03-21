export const Card = () => {
  return (
      <div className="card" style={{ width: "20rem", height:"30rem"}}>
        <img
          src="https://media-front.elmostrador.cl/2023/03/DarkSide-700x466.jpg"
          class="card-img-top"
          alt="..."
          style={{ height: "30rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">Hola</h5>
          <p className="card-text">Hola</p>
          <p>Hola</p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>

  );
};
