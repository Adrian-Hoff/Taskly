//firebase
import { PhoneAuthCredential } from "firebase/auth";

export type TypeFirebaseCreateUserWithEmailAndPassword = {
  name: string;
  email: string;
  password: string;
  phoneNumber: PhoneAuthCredential;
};
