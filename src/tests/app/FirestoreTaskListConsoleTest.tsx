//types
import { TypeStateDATA } from "../../types/@states/app/TaskScreen/TypeStateDATA";

//utils
import { AppUtil_DateConverter } from "../../utils/app/AppUtil_DateConverter";

export default function FirestoreTaskListTest(data: TypeStateDATA) {
  data.forEach((currentSection) => {
    var currentSectionTitleAlreadyPrinted = false;
    if (!currentSectionTitleAlreadyPrinted) {
      currentSectionTitleAlreadyPrinted = true;
      console.log(
        AppUtil_DateConverter(currentSection.title).DateFormats()["dd/mm/yyyy"]
      );
    }
    currentSection.data.forEach((currentTask) => {
      console.log(currentTask);
    });
  });
}
