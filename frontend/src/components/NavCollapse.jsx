import {Link} from 'react-router-dom';

export const NavCollapse = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav-collapse navbar-nav d-flex w-100 justify-content-center gap-lg-5 mb-2 mb-lg-0 fw-bold fs-4">
            <li class="nav-item">
              <Link className='nav-link active'aria-current="page" to="/">Home</Link> 
            </li>
            <li class="nav-item">
            <Link className='nav-link active'aria-current="page" to="canciones">Canciones</Link> 
            </li>
            <li class="nav-item">
            <Link className='nav-link active'aria-current="page" to="usuarios">Usuarios</Link> 
            </li>
          </ul>
        </div>
  )
}