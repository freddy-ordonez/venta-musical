import { useRef, useState } from "react";

export const DataGenreMusic = ({ genero }) => {
  const [actualizar, setActualizar] = useState(false);
  const [gen, setGen] = useState(genero);
  const refNombre = useRef();
  const refDescripcion = useRef();
  const refGuardar = useRef();

  const manejoClickActualizar = (e) => {
    e.target.disabled = true;
    refNombre.current.disabled = false;
    refDescripcion.current.disabled = false;
    refGuardar.current.disabled = false;
  };

  return (
    <>
      <tr>
        <td style={{ width: "15%" }}>
          <div class="d-flex align-items-center overflow-hidden">
            <div class="ms-3">
              <input
                type="text"
                class="fw-bold mb-1 border-0 data-disable"
                value={gen.nombre}
                ref={refNombre}
                onChange={(e) => (setActualizar({...actualizar, nombre: e.target.value}))}
                disabled
              />
            </div>
          </div>
        </td>
        <td className="w-50">
          <textarea
            type="text"
            class="w-100 fw-normal mb-1 border-0 data-disable"
            value={gen.descripcion}
            disabled
            ref={refDescripcion}
            onChange={(e) => setGen({...actualizar, descripcion: e.target.value})}
          />
        </td>
        <td>
          <button
            type="button"
            class="btn btn-dark rounded-0"
            onClick={manejoClickActualizar}
          >
            Editar
          </button>
          <button type="button" class="btn btn-dark rounded-0 ms-lg-3" disabled ref={refGuardar}>
            Guardar
          </button>
        </td>
      </tr>
    </>
  );
};
