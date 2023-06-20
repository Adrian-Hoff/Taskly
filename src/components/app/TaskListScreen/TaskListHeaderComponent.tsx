//react
import React from "react";

//react-native
import { SafeAreaView } from "react-native-safe-area-context";

//utils
import { AppUtil_DateConverter } from "../../../utils/app/AppUtil_DateConverter";

//app-texts
import { APP_TEXTS } from "../../../content/app/APP_TEXTS";

//themes
import { THEMES } from "../../../themes/Themes";

//svg
import VectorLogoFillSVG from "../../../assets/VectorLogoFillSVG.svg";

//native-base
import { Box, HStack, VStack } from "native-base";

//components
import TextComponent from "../../TextComponent";

function TaskListHeaderComponent() {
  const date = AppUtil_DateConverter(new Date().toDateString());
  console.log(date);

  return (
    <Box>
      <Box>
        <VStack
          bg={THEMES.color.bg.gray}
          p={5}
          space={10}
          roundedBottom={"2xl"}
        >
          <SafeAreaView>
            <HStack justifyContent={"space-between"}>
              <VectorLogoFillSVG />
              <TextComponent
                fontFamily={THEMES.fontFamily.Lato_400Regular}
                color={THEMES.color.font.gray60}
                text={date.DateFormats().stringDMY}
                fontSize={"sm"}
              />
            </HStack>
          </SafeAreaView>
          <Box>
            <TextComponent
              text={APP_TEXTS.taskListScreen.TaskListHeaderComponent.text_1}
              fontFamily={THEMES.fontFamily.Lato_400Regular}
              color={THEMES.color.font.gray40}
              textTransform={"uppercase"}
              fontSize={"2xl"}
            />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default React.memo(TaskListHeaderComponent);
