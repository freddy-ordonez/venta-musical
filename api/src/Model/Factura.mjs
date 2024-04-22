import mongoose from "mongoose";

const facturaEsquema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  fechaCompra: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
  subTotalCompra: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  totalCompra: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  canciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cancion"
    }
  ]
});

export const Factura = mongoose.model("Factura", facturaEsquema);
