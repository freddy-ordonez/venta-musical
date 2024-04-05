export const Alert = ({mensaje, tipo}) => {
  return (
    <div>
        <div>
          <div class={`alert alert-${tipo} alert-dismissible`} role="alert">
            <div>{mensaje}</div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
  )
}