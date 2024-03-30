import { Outlet } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { NavCollapse } from "./NavCollapse";

export const Header = () => {
  return (
    <>
      <nav class="nav navbar navbar-expand-lg">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="logo navbar-brand fw-bold fs-2" href="#">
            F.Music
          </a>
          <NavCollapse />
          <Dropdown />
        </div>
      </nav>
      <Outlet />
    </>
  );
};
