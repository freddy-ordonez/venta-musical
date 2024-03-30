import { PaymentMethod } from "../components/PaymentMethod";
import { ProfileLeft } from "../components/ProfileLeft";
import { UserConfig } from "../components/UserConfig";

export const Profile = () => {
  return (
    <div
      class="container rounded-0 mt-5 mb-5"
      style={{ backgroundColor: "#CFD6E5" }}
    >
      <div class="row">
        <ProfileLeft />
        <div class="col-md-5 border-right">
          <div class="p-3 py-5 fw-bold">
            <UserConfig />
            <hr className="my-5" />
            <PaymentMethod />
            <div class="mt-5 text-right">
              <button
                class="btn btn-dark rounded-0 fs-5 fw-bold "
                type="button"
              >
                Guardar Pefil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
