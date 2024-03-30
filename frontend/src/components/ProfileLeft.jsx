import usuario from "../assets/usuario.png";

export const ProfileLeft = () => {
  return (
    <div class="col-md-6 border-right fw-bold fs-4">
      <div class="d-flex flex-column align-items-center text-center p-3 py-5">
        <img class="rounded-circle mt-5" width="150px" src={usuario} />
        <span class="font-weight-bold">Edogaru</span>
        <span class="text-black-50">edogaru@mail.com.my</span>
        <span> </span>
      </div>
    </div>
  );
};
