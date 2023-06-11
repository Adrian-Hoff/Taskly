import { SetStateAction } from "react";
import { TypeAuthContextUser } from "./TypeAuthContextUser/TypeAuthContextUser";

export type TypeAuthContext = {
  user: TypeAuthContextUser;
  setUser: Function;
};
