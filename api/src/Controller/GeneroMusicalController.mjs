import { GeneroMusical } from "../Model/GeneroMusical.mjs";

export const obtenerGenerosMusicales = async (request, response) => {
  try {
    const generos = await GeneroMusical.find({});
    return response.status(200).send(generos);
  } catch (error) {
    console.error("Error interno al traer todos los generos musicales");
    return response.status(500).send({ message: error });
  }
};

export const agregarGeneroMusical = async (request, response) => {
  const generoMusical = request.body;
  const nuevoGeneroMusical = new GeneroMusical(generoMusical);

  try {
    const generoGuardado = await nuevoGeneroMusical.save();
    return response.status(201).send(generoGuardado);
  } catch (error) {
    console.error("Error interno al agragar un nuevo genero musical", error);
    response.status(500).send({ message: error });
  }
};

export const actualizarGeneroMusical = async (request, response) => {
  const { id } = request.params;
  const { nombre, descripcion } = request.body;

  try {
    const genero = await GeneroMusical.findByIdAndUpdate(
      id,
      { nombre, descripcion },
      { new: true }
    );

    if (!genero) {
      return response.status(404).send({ message: "Usuario no encontrado" });
    }
    return response.status(200).send(genero);
  } catch (error) {
    console.error("Error interno al actualizar el genero musical");
    return response.status(500).send({ message: error });
  }
};

export const eliminarGeneroMusical = async (request, response) => {
  try {
    const { id } = request.params;
    const eliminarGenero = await GeneroMusical.findByIdAndDelete(id);
    if (!eliminarGenero)
      return response.status(400).send({ message: "Genero no encontrado" });
    return response.status(200).send({ message: "Eliminado con exito" });
  } catch (error) {
    console.error("Error al eliminar un genero");
  }
};
