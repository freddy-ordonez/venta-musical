import usuario from "../../assets/usuario.png";

export const ProfileLeft = ({nombre, corroElectronico}) => {
  return (
    <div class="col-md-6 border-right fw-bold fs-4">
      <div class="d-flex flex-column align-items-center text-center p-3 py-5">
        <img class="rounded-circle mt-5" width="150px" src={usuario} />
        <span class="font-weight-bold">{nombre}</span>
        <span class="text-black-50">{corroElectronico}</span>
        <span> </span>
      </div>
    </div>
  );
};
