import mongoose from "mongoose";

mongoose.set("debug", true);

mongoose
  .connect('mongodb://127.0.0.1:27017/venta-musical')
  .then((d) => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log(err);
  });
