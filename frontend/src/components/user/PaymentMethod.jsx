export const PaymentMethod = ({values, handleChange, errors}) => {
  return (
    <>
        <h6 className="fs-4">Metodo Pago</h6>
              <div className="col-md-12 mt-3">
                <label className="labels">Numero Tarjeta</label>
                <input
                  type="text"
                  className="form-control"
                  id="numeroTarjeta"
                  value={values.numeroTarjeta}
                  onChange={handleChange}
                />
                {errors.numeroTarjeta ? <div className="text-danger">{errors.numeroTarjeta}</div>: null}
              </div>
    </>
  )
}