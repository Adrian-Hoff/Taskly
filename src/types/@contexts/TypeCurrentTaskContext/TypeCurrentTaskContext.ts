//types
import { TypeStateTaskFromSectionInDATA } from "../../@states/app/TaskScreen/TypeStateDATA";

export type TypeCurrentTaskContext = {
  currentTask: TypeStateTaskFromSectionInDATA;
  setCurrentTask: Function;
};
