import { checkSchema } from "express-validator";

export const usuarioValidacion = checkSchema({
  nombre: {
    notEmpty: {
      errorMessage: "Nombre de Usuario es requerido",
    },
    isLength: {
      options: {
        min: 10,
        max: 100,
      },
      errorMessage: "Nombre de usuario minimo 10 caracteres y max 100",
    },
    isString: {
      errorMessage: "Nombre de usuario tiene que ser de tipo string",
    },
  },
  dni: {
    notEmpty: {
      errorMessage: "DNI es requerido",
    },
    isLength: {
      options: {
        min: 8,
        max: 21,
      },
      errorMessage: "DNI minimo 8 caracteres y max 21",
    },
    isString: {
      errorMessage: "DNI tiene que ser de tipo string",
    },
  },
  genero: {
    notEmpty: {
      errorMessage: "Genero requerido",
    },
    isString: {
      errorMessage: "Genero tiene que ser de tipo string",
    }
  },
  contrasena: {
    notEmpty: {
      errorMessage: "Contrasena es requerido",
    },
    isLength: {
      options: {
        min: 8,
        max: 12,
      },
      errorMessage: "Contrasena minimo 8 caracteres y max 12",
    },
    isString: {
      errorMessage: "Contrasena tiene que ser de tipo string",
    },
  },
  tipoUsuario: {
    notEmpty: {
      errorMessage: "Tipo Usuario es requerido",
    },
    isString: {
      errorMessage: "Tipo Usuario tiene que ser de tipo string",
    },
  },
  correoElectronico: {
    notEmpty: {
      errorMessage: "Correo Electronico es requerido",
    },
    isString: {
      errorMessage: "Tipo Usuario tiene que ser de tipo string",
    },
  },
});
