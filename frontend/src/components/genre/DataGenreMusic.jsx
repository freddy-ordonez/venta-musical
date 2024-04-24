import { useEffect, useRef, useState } from "react";
import { estadoGeneroMusical } from "../../store/genMusicStore";

export const DataGenreMusic = ({ genero }) => {
  const [actualizar, setActualizar] = useState(false);
  const [gen, setGen] = useState(genero);
  const refNombre = useRef();
  const refDescripcion = useRef();
  const refGuardar = useRef();
  const refEditar = useRef();

  const { actualizarGenero, eliminarGenero } = estadoGeneroMusical();

  const manejoClickActualizar = (e) => {
    e.target.disabled = true;
    refNombre.current.disabled = false;
    refDescripcion.current.disabled = false;
    refGuardar.current.disabled = false;
  };

  const manejoClikGuardar = (e) => {
    actualizarGenero(genero._id, gen);
    e.target.disabled = true;
    refEditar.current.disabled = false;
    refNombre.current.disabled = true;
    refDescripcion.current.disabled = true;
  };

  const manejoClikEliminar = () => {
    eliminarGenero(gen._id);
  };

  useEffect(() => {
    refGuardar.current.disabled = true;
  }, []);

  return (
    <>
      <tr>
        <td style={{ width: "15%" }}>
          <div className="d-flex align-items-center overflow-hidden">
            <div className="ms-3">
              <input
                type="text"
                className="fw-bold mb-1 border-0 data-disable"
                value={gen.nombre}
                ref={refNombre}
                onChange={(e) =>
                  setActualizar({ ...actualizar, nombre: e.target.value })
                }
                disabled
              />
            </div>
          </div>
        </td>
        <td className="w-50">
          <textarea
            type="text"
            className="w-100 fw-normal mb-1 border-0 data-disable"
            value={gen.descripcion}
            disabled
            ref={refDescripcion}
            rows={3}
            onChange={(e) =>
              setGen({ ...actualizar, descripcion: e.target.value })
            }
            style={{ resize: "none" }}
          />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-dark rounded-0"
            onClick={manejoClickActualizar}
            ref={refEditar}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-dark rounded-0 ms-lg-3"
            ref={refGuardar}
            onClick={manejoClikGuardar}
          >
            Guardar
          </button>
          <button
            type="button"
            className="btn btn-dark rounded-0 ms-lg-3"
            onClick={manejoClikEliminar}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
