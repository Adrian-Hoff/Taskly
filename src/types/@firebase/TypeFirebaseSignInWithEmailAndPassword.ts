import { Dispatch, SetStateAction } from "react";
import { TypeAuthContextUser } from "../@contexts/TypeAuthContext/TypeAuthContextUser/TypeAuthContextUser";
import { TypeUseToast } from "../@hooks/TypeUseToast/TypeUseToast";

export type TypeFirebaseSignInWithEmailAndPassword = {
  email: string;
  password: string;
  setUser: Dispatch<SetStateAction<TypeAuthContextUser>> | Function;
  toast: ({}: TypeUseToast) => void;
};
