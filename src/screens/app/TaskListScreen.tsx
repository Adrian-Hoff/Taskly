//react
import React, { useContext, useEffect, useState } from "react";

//contexts
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { CurrentTaskContext } from "../../contexts/app/CurrentTaskContext";

//services
import { FirebaseGetAllTasks } from "../../services/app/TaskListScreen/FirebaseGetAllTasks";

//utils
import { AppUtil_DateConverter } from "../../utils/app/AppUtil_DateConverter";

//themes
import { THEMES } from "../../themes/Themes";

//types
import { TypeStateDATA } from "../../types/@states/app/TaskScreen/TypeStateDATA";

//native-base
import { Box, SectionList, Text } from "native-base";

//components
import TaskListHeaderComponent from "../../components/app/TaskListScreen/TaskListHeaderComponent";
import TaskCardComponent from "../../components/app/TaskListScreen/TaskCardComponent";
import TextComponent from "../../components/TextComponent";

function TaskListScreen() {
  const { user } = useContext(AuthContext);
  const { currentTask } = useContext(CurrentTaskContext);
  const [data, setData] = useState<TypeStateDATA>([] as TypeStateDATA);
  async function handleFirebaseGetAllTasks() {
    let sections: TypeStateDATA | undefined = await FirebaseGetAllTasks(user);
    if (sections) {
      setData(sections);
    }
  }

  async function addTask() {
    const currentTaskSectionTitle = AppUtil_DateConverter(
      currentTask.utc
    ).DateFormats().dbPath;

    const sectionExists = data.find(
      (dataTask) =>
        AppUtil_DateConverter(dataTask.title).DateFormats().dbPath ===
        currentTaskSectionTitle
    );
    if (!!sectionExists) {
      const taskSectionData = sectionExists.data;

      setData((prev) => [
        ...prev.filter(
          (dataTask) =>
            AppUtil_DateConverter(dataTask.title).DateFormats().dbPath !==
            currentTaskSectionTitle
        ),
        {
          title: sectionExists.title,
          data: [...taskSectionData, currentTask],
        },
      ]);
    } else {
      setData((prev) => [
        ...prev,
        { title: currentTask.utc, data: [currentTask] },
      ]);
    }

    setData((prev) => [...prev.sort()]);
  }

  useEffect(() => {
    handleFirebaseGetAllTasks();
  }, []);

  useEffect(() => {
    addTask();
  }, [currentTask]);
  return (
    <Box flex={1}>
      <TaskListHeaderComponent />
      <SectionList
        contentContainerStyle={{ flexGrow: 1 }}
        ListFooterComponent={() => <Box pt={24}></Box>}
        px={5}
        sections={data}
        keyExtractor={(item, index) => item.utc + index}
        renderItem={({ item, index }) => (
          <TaskCardComponent taskJSON={item} key={item.utc + index} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Box flexDir={"row"} mt={10} mb={2}>
            <Box bg={THEMES.color.bg.gray} rounded={"md"} py={2} px={4}>
              <TextComponent
                text={AppUtil_DateConverter(title).DateFormats().dbPath}
                fontFamily={THEMES.fontFamily.Lato_700Bold}
                color={THEMES.color.font.gray40}
                fontSize={THEMES.fontSize.md}
              />
            </Box>
            <Box flex={1} />
          </Box>
        )}
      />
    </Box>
  );
}
export default React.memo(TaskListScreen);
