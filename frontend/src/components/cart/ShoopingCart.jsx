import { Link } from "react-router-dom";
import { CardItemShooping } from "./CardItemShooping";
import { SummaryShoopingCart } from "./SummaryShoopingCart";
import { estadoCarritoCompras } from "../../store/cartShoopingStore";
import { estadoUsuario } from "../../store/userStore";
import { useState } from "react";
import { Alert } from "../common/Alert";

export const ShoopingCart = () => {
  const [abrirModal, setAbrirModal] = useState({
    abrir: false,
    mensaje: "",
    tipoMensaje: "",
  });
  const { carrito, agregarFactura } = estadoCarritoCompras();
  const { login, loginAgregarCanciones } = estadoUsuario();

  const cancionesCompradas = carrito.map((cancion) => (
    <CardItemShooping key={cancion.id} cancion={cancion} />
  ));

  const manejoClickComprar = async (subTotalCompra, totalCompra) => {
    const factura = {
      usuario: login._id,
      subTotalCompra,
      totalCompra,
      canciones: carrito,
    };
    const agregadoConExito = agregarFactura(factura);
    if (agregadoConExito) {
      loginAgregarCanciones(carrito);
      setAbrirModal({
        abrir: true,
        mensaje: "Muchas gracias por su compra!!!",
        tipoMensaje: "success",
      });
    } else {
      setAbrirModal({
        abrir: true,
        mensaje: "Hubo un error con su compra!!!",
        tipoMensaje: "danger",
      });
    }
    setTimeout(() => {
      setAbrirModal({ abrir: false });
    }, 3000);
  };

  return (
    <section class="h-100 h-custom" style={{ backgroundColor: "#CFD6E5" }}>
      <div class="container py-5 h-100">
        {abrirModal.abrir ? (
          <Alert mensaje={abrirModal.mensaje} tipo={abrirModal.tipoMensaje} />
        ) : null}
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
                        <h6 class="mb-0 text-muted">{carrito.length} items</h6>
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
                  <SummaryShoopingCart
                    carrito={carrito}
                    manejoClickComprar={manejoClickComprar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
