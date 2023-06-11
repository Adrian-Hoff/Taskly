import { Dispatch, SetStateAction } from "react";
import { TypeAuthContextUser } from "../@contexts/TypeAuthContext/TypeAuthContextUser/TypeAuthContextUser";

export type TypeFirebaseSignInWithEmailAndPassword = {
  email: string;
  password: string;
  setUser: Dispatch<SetStateAction<TypeAuthContextUser>> | Function;
};
