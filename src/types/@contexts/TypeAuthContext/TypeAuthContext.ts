//react
import { Dispatch, SetStateAction } from "react";

import { TypeAuthContextUser } from "./TypeAuthContextUser/TypeAuthContextUser";

export type TypeAuthContext = {
  user: TypeAuthContextUser;
  setUser: Dispatch<SetStateAction<TypeAuthContextUser>> | Function;
};
