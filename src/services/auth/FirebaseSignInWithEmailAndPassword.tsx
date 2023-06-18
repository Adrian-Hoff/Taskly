//firebase
import { getAuth, signInWithEmailAndPassword, AuthError } from "firebase/auth";

//types
import { TypeFirebaseSignInWithEmailAndPassword } from "../../types/@firebase/TypeFirebaseSignInWithEmailAndPassword";
import GetOpenaiKey from "../app/GetOpenaiKey";
import { TypeAuthError } from "../../types/@firebase/errors/TypeAuthError";

export async function FirebaseSignInWithEmailAndPassword({
  email,
  password,
  setUser,
  toast,
}: TypeFirebaseSignInWithEmailAndPassword) {
  const auth = getAuth();

  async function SignIn() {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const key = await GetOpenaiKey(user);
      setUser({ ...user, key });
    } catch (error) {
      const authError = error as TypeAuthError;
      toast({ message: authError.message, type: "ERROR" });
    }
  }

  return SignIn();
}
