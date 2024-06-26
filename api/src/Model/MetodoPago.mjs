import mongoose from "mongoose";

const metodoPagoEsquema = new mongoose.Schema({
  tipoPago: {
    type: mongoose.Schema.Types.String,
    enum: ["VISA", "MASTERCARD", "AMERICAN-EXPRESS"],
    require: true,
  },
  numeroTarjeta: {
    type: mongoose.Schema.Types.String,
    minLength: 15,
    maxLength: 16,
    require: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

export const MetodoPago = mongoose.model("MetodoPago", metodoPagoEsquema);
