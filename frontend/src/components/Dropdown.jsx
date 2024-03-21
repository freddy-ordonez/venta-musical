export const Dropdown = () => {
  return (
    <div class="btn-group">
          <button
            type="button"
            class="avatar btn btn-dark fs-4 dropdown-toggle rounded-0"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Freddy
          </button>
          <ul class="dropdown-menu dropdown-menu-start dropdown-menu-lg-end fs-5">
            <li>
              <a class="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>
  )
}