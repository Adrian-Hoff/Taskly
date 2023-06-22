//firebase
import { DocumentData } from "firebase/firestore";

export type TypeStateSectionFromDATA = {
  title: string;
  data: DocumentData[];
};
export type TypeStateDATA = TypeStateSectionFromDATA[];
export type TypeStateTaskFromSectionInDATA = {
  title: string;
  utc: string;
  description: string;
};
