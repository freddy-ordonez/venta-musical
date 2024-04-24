import { FormMusic } from "./FormMusic";

export const ModalMusic = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="modalAgregarMusica"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded-0 w-75">
            <div class="modal-header border-bottom-0">
              <h1 class="modal-title fs-3 fw-bold">Agregar Musica</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <FormMusic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
