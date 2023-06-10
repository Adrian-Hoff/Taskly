//firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
  updatePhoneNumber,
} from "firebase/auth";

//types
import { TypeFirebaseCreateUserWithEmailAndPassword } from "../../types/@firebase/TypeFirebaseCreateUserWithEmailAndPassword";

export async function FirebaseCreateUserWithEmailAndPassword({
  email,
  password,
  name,
}: TypeFirebaseCreateUserWithEmailAndPassword) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      updateProfile(user, {
        displayName: name,
      }).then(() => console.log(user));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
