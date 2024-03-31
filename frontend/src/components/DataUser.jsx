export const DataUser = () => {
  return (
    <>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              class="rounded-circle"
            />
            <div class="ms-3">
              <input
                type="text"
                class="fw-bold mb-1 border-0 data-disable"
                placeholder="Freddy Ordonez Aguilar"
                disabled
              />
              <input
                type="text"
                class="d-block text-muted mb-0 border-0 data-disable"
                placeholder="john.doe@gmail.com"
                disabled
              />
              <input
                type="text"
                class="d-block text-muted mb-0 border-0 data-disable"
                placeholder="john.doe@gmail.com"
                disabled
              />
            </div>
          </div>
        </td>
        <td>
          <input
            class="fw-normal mb-1 border-0 data-disable"
            placeholder="1111111111"
            disabled
          />
          <input
            class="d-block text-muted border-0 mb-0 data-disable "
            placeholder="M"
            disabled
          />
        </td>
        <td>
          <select className="btn btn-dark text-white border border-0 rounded-0" disabled>
            <option value="ADMINISTRADOR" className="border-0 rounded-0">
              Administrador
            </option>
            <option value="USUARIO" className="border-0 rounded-0">
              Usuario
            </option>
          </select>
        </td>
        <td>
          <input
            class="fw-normal mb-1 border-0 data-disable"
            placeholder="1111111111"
            disabled
          />
        </td>
        <td>
          <button type="button" class="btn btn-dark rounded-0">
            Edit
          </button>
          <button type="button" class="btn btn-dark rounded-0 ms-lg-3" disabled>
            Save
          </button>
        </td>
      </tr>
    </>
  );
};
