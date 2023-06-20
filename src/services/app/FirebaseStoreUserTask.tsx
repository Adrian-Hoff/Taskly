import { addDoc, collection, getFirestore } from "firebase/firestore";
import { TypeFirebaseStoreUserTask } from "../../types/@firebase/app/TypeFirebaseStoreUserTask";

export default async function FirebaseStoreUserTask({
  user,
  taskJSON,
}: TypeFirebaseStoreUserTask) {
  const date = new Date(taskJSON.utc);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  const store = addDoc(
    collection(getFirestore(), "tasks", user.uid, `${day}-${month}-${year}`),
    {
      ...taskJSON,
    }
  );

  return store;
}
