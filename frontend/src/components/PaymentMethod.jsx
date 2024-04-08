export const PaymentMethod = ({values, handleChange}) => {
  return (
    <>
        <h6 className="fs-4">Metodo Pago</h6>
              <div class="col-md-12 mt-3">
                <label class="labels">Numero Tarjeta</label>
                <input
                  type="text"
                  class="form-control"
                  id="metodoPago"
                  value={values.numeroTarjeta}
                  onChange={handleChange}
                />
              </div>
    </>
  )
}