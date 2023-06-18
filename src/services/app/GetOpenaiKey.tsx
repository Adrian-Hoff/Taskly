//firebase
import { doc, getDoc, getFirestore } from "firebase/firestore";

//contexts
import { TypeAuthContextUser } from "../../types/@contexts/TypeAuthContext/TypeAuthContextUser/TypeAuthContextUser";
export default async function GetOpenaiKey(user: TypeAuthContextUser) {
  try {
    const key = await getDoc(doc(getFirestore(), "keys", user.uid));
    return key.data()?.key;
  } catch (error) {
    console.log(error);
  }
}
