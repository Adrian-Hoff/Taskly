//react
import { createContext, useEffect, useState } from "react";

//types
import { TypeReactNode } from "../../types/@contexts/TypeReactNode";
import { TypeStateTaskFromSectionInDATA } from "../../types/@states/app/TaskScreen/TypeStateDATA";
import { TypeCurrentTaskContext } from "../../types/@contexts/TypeCurrentTaskContext/TypeCurrentTaskContext";

export const CurrentTaskContext = createContext({} as TypeCurrentTaskContext);
export default function CurrentTaskContextProvider({
  children,
}: TypeReactNode) {
  const [currentTask, setCurrentTask] =
    useState<TypeStateTaskFromSectionInDATA>(
      {} as TypeStateTaskFromSectionInDATA
    );

  return (
    <CurrentTaskContext.Provider value={{ currentTask, setCurrentTask }}>
      {children}
    </CurrentTaskContext.Provider>
  );
}
