import { addDoc, collection, getFirestore } from "firebase/firestore";
import { TypeFirebaseStoreUserTask } from "../../types/@firebase/app/TypeFirebaseStoreUserTask";

export default async function FirebaseStoreUserTask({
  user,
  taskJSON,
}: TypeFirebaseStoreUserTask) {
  // const date = new Date(taskJSON.utc);

  const store = addDoc(
    collection(getFirestore(), "users-tasks", user.uid, `tasks`),
    {
      ...taskJSON,
    }
  );

  return store;
}
