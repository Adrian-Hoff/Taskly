//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//types
import { TypeFirebaseSignInWithEmailAndPassword } from "../../types/@firebase/TypeFirebaseSignInWithEmailAndPassword";

export async function FirebaseSignInWithEmailAndPassword({
  email,
  password,
}: TypeFirebaseSignInWithEmailAndPassword) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}
