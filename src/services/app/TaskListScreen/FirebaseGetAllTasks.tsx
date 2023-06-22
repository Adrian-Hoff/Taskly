//firebase
import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

//contexts
import { TypeAuthContextUser } from "../../../types/@contexts/TypeAuthContext/TypeAuthContextUser/TypeAuthContextUser";
import { AppUtil_DateConverter } from "../../../utils/app/AppUtil_DateConverter";
import { TypeStateTaskJSON } from "../../../types/@states/app/DashboardScreen/TypeStateTaskJSON";
import { TypeStateDATA } from "../../../types/@states/app/TaskScreen/TypeStateDATA";

export async function FirebaseGetAllTasks(user: TypeAuthContextUser) {
  try {
    const DATA = [] as TypeStateDATA;

    const allTasks = await getDocs(
      query(
        collection(getFirestore(), "users-tasks", user.uid, "tasks"),
        orderBy("utc")
      )
    );
    allTasks.forEach((doc) => {
      const currentTask = doc.data();
      const currentTaskDateWihtoutTime = AppUtil_DateConverter(
        currentTask.utc
      ).DateFormats().dbPath;
      const doesThisTaskSectionExists = DATA.find(
        (DATA) =>
          AppUtil_DateConverter(DATA.title).DateFormats().dbPath ===
          currentTaskDateWihtoutTime
      );

      const sectionWithCurrentTaskIndex = doesThisTaskSectionExists;

      if (!!!doesThisTaskSectionExists) {
        DATA.push({
          title: currentTask.utc,
          data: [currentTask],
        });
      } else {
        sectionWithCurrentTaskIndex?.data.push(currentTask);
      }
    });
    return DATA;
  } catch (err) {
    console.log(err);
  }
}
