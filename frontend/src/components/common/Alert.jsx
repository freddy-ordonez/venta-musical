export const Alert = ({mensaje, tipo}) => {
  return (
    <div>
        <div>
          <div className={`alert alert-${tipo} alert-dismissible`} role="alert">
            <div>{mensaje}</div>
          </div>
        </div>
      </div>
  )
}