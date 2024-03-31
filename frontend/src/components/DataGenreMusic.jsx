export const DataGenreMusic = () => {
  return (
    <>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="ms-3">
              <input
                type="text"
                class="fw-bold mb-1 border-0 data-disable"
                placeholder="Freddy Ordonez Aguilar"
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
  )
}