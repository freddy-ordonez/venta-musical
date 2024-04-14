export const PaymentMethod = ({values, handleChange, errors}) => {
  return (
    <>
        <h6 className="fs-4">Metodo Pago</h6>
              <div class="col-md-12 mt-3">
                <label class="labels">Numero Tarjeta</label>
                <input
                  type="text"
                  class="form-control"
                  id="numeroTarjeta"
                  value={values.numeroTarjeta}
                  onChange={handleChange}
                />
                {errors.numeroTarjeta ? <div className="text-danger">{errors.numeroTarjeta}</div>: null}
              </div>
    </>
  )
}