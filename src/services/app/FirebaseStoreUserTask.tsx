import { doc, getFirestore, setDoc } from "firebase/firestore";
import { TypeFirebaseStoreUserTask } from "../../types/@firebase/app/TypeFirebaseStoreUserTask";

export default async function FirebaseStoreUserTask({
  user,
  taskJSON,
}: TypeFirebaseStoreUserTask) {
  const store = await setDoc(
    doc(getFirestore(), "users", user.uid, taskJSON.utc, "tasks"),
    {
      ...taskJSON,
    }
  );

  return store;
}
