//react
import React, { useContext, useEffect, useState } from "react";

//native-base
import { Box, Flex, ScrollView, VStack } from "native-base";

//TEXTS
import { APP_TEXTS } from "../../content/app/APP_TEXTS";

//THEMES
import { THEMES } from "../../themes/Themes";

//constants
import { create_task_text } from "../../constants/create_task_text";

//contexts
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { CurrentTaskContext } from "../../contexts/app/CurrentTaskContext";

//types
import { TypeStateTaskJSON } from "../../types/@states/app/DashboardScreen/TypeStateTaskJSON";

//firebase
import FirebaseStoreUserTask from "../../services/app/FirebaseStoreUserTask";

//apis
import completitionAPI from "../../api/completionAPI";

//components
import DashboardHeaderComponent from "../../components/app/DashboardHeaderComponent";
import InputComponent from "../../components/InputComponent";
import TextComponent from "../../components/TextComponent";

function DashboardScreen() {
  const { user } = useContext(AuthContext);
  const [taskText, setTaskText] = useState("");
  const { setCurrentTask } = useContext(CurrentTaskContext);

  async function handleApiCall() {
    try {
      const response = await completitionAPI({
        prompt: create_task_text(taskText),
        user,
      });
      const stringTaskToJSON = JSON.parse(response);
      const taskJSON = stringTaskToJSON;
      FirebaseStoreUserTask({ user, taskJSON });
      setCurrentTask(taskJSON);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {}, []);

  return (
    <Box flex={1}>
      <ScrollView _contentContainerStyle={{ flexGrow: 1, pb: 20 }}>
        <DashboardHeaderComponent />
        <VStack px={5} pt={10} mb={10}>
          <InputComponent
            text={APP_TEXTS.dashboardScreen.inputComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            onChangeText={(text) => setTaskText(text)}
            color={THEMES.color.font.gray80}
            onSubmitEditing={handleApiCall}
            bg={THEMES.color.bg.gray}
            fontSize={"sm"}
          />
        </VStack>
        <Box px={5}>
          <TextComponent
            text={APP_TEXTS.dashboardScreen.textComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray80}
            fontSize={"sm"}
          />
        </Box>
      </ScrollView>
      {/* 
      <Flex flex={1} />
      <Box bg={"white"} h={"20"} /> */}
    </Box>
  );
}

export default React.memo(DashboardScreen);
