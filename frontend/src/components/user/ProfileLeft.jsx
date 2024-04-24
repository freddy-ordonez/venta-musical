import usuario from "../../assets/usuario.png";

export const ProfileLeft = ({nombre, corroElectronico}) => {
  return (
    <div className="col-md-6 border-right fw-bold fs-4">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img className="rounded-circle mt-5" width="150px" src={usuario} />
        <span className="font-weight-bold">{nombre}</span>
        <span className="text-black-50">{corroElectronico}</span>
        <span> </span>
      </div>
    </div>
  );
};
