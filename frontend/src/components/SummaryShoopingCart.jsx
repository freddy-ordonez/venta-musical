export const SummaryShoopingCart = () => {
  return (
    <div class="col-lg-4 bg-grey" style={{ backgroundColor: "#EAE8E8" }}>
      <div class="p-5">
        <h3 class="fw-bold mb-5 mt-2 pt-1">Sumario</h3>
        <hr class="my-4" />

        <div class="d-flex justify-content-between mb-4">
          <h5 class="text-uppercase">items 3</h5>
          <h5>€ 132.00</h5>
        </div>

        <h5 class="text-uppercase mb-3">Comprando</h5>

        <hr class="my-4" />

        <div class="d-flex justify-content-between mb-5">
          <h5 class="text-uppercase">Precio Total</h5>
          <h5>€ 137.00</h5>
        </div>

        <button
          type="button"
          class="btn btn-dark btn-block btn-lg"
          data-mdb-ripple-color="dark"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
