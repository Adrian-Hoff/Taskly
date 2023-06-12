//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//types
import { TypeFirebaseSignInWithEmailAndPassword } from "../../types/@firebase/TypeFirebaseSignInWithEmailAndPassword";

export async function FirebaseSignInWithEmailAndPassword({
  email,
  password,
  setUser,
  toast,
}: TypeFirebaseSignInWithEmailAndPassword) {
  const auth = getAuth();

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser({ ...user });
    })
    .catch((error) => {
      toast({ message: error.message, type: "ERROR" });
    });
}
