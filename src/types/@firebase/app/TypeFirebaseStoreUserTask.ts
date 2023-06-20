import { TypeAuthContextUser } from "../../@contexts/TypeAuthContext/TypeAuthContextUser/TypeAuthContextUser";
import { TypeStateTaskJSON } from "../../@states/app/DashboardScreen/TypeStateTaskJSON";

export type TypeFirebaseStoreUserTask = {
  user: TypeAuthContextUser;
  taskJSON: TypeStateTaskJSON;
};
