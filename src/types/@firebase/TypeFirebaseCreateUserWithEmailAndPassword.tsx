import { TypeUseToast } from "../@hooks/TypeUseToast/TypeUseToast";

export type TypeFirebaseCreateUserWithEmailAndPassword = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  toast: ({ message, type }: TypeUseToast) => void;
};
