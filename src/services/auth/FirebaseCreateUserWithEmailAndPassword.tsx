//firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

//types
import { TypeFirebaseCreateUserWithEmailAndPassword } from "../../types/@firebase/TypeFirebaseCreateUserWithEmailAndPassword";

export async function FirebaseCreateUserWithEmailAndPassword({
  email,
  password,
  name,
  toast,
}: TypeFirebaseCreateUserWithEmailAndPassword) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      updateProfile(user, {
        displayName: name,
      }).then(() => {
        toast({ message: "Account Created With Success", type: "SUCCESS" });
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast({ message: errorCode, type: "ERROR" });
    });
}
