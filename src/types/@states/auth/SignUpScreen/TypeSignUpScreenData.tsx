import { TypeFirebaseCreateUserWithEmailAndPassword } from "../../../@firebase/TypeFirebaseCreateUserWithEmailAndPassword";

export type TypeSignUpScreenData =
  TypeFirebaseCreateUserWithEmailAndPassword & {
    passwordConfirmation: string;
  };
