import { Link } from "react-router-dom";
import { CardItemShooping } from "./CardItemShooping";
import { SummaryShoopingCart } from "./SummaryShoopingCart";

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

export const ShoopingCart = () => {
  const cancionesCompradas = canciones.map((cancion) => (
    <CardItemShooping key={cancion.id} cancion={cancion} />
  ));

  return (
    <section class="h-100 h-custom" style={{ backgroundColor: "#CFD6E5" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
            <div
              class="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-lg-8">
                    <div class="p-5">
                      <div class="d-flex justify-content-between align-items-center mb-5">
                        <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 class="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr class="my-4" />

                      {cancionesCompradas}

                      <div class="pt-5">
                        <h6 class="mb-0">
                          <Link to="/" class="text-body text-decoration-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-arrow-left"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                              />
                            </svg>
                            Seguir Comprando
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <SummaryShoopingCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
