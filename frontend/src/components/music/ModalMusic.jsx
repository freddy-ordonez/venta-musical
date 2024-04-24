import { FormMusic } from "./FormMusic";

export const ModalMusic = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalAgregarMusica"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0 w-75">
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-3 fw-bold">Agregar Musica</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FormMusic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
