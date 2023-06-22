//react
import React, { useEffect } from "react";

//themes
import { THEMES } from "../../../themes/Themes";

//svg
import CancelFillSVG from "../../../assets/CancelFillSVG.svg";
import ConfirmFillSVG from "../../../assets/ConfirmFillSVG.svg";

//types
import { TypeTaskCardComponent } from "../../../types/@components/TypeTaskCardComponent";

//react-native
import { TouchableOpacity } from "react-native";

//native-base
import { Box, HStack, VStack } from "native-base";

//components
import TextComponent from "../../TextComponent";
import { AppUtil_DateConverter } from "../../../utils/app/AppUtil_DateConverter";

function TaskCardComponent({ taskJSON }: TypeTaskCardComponent) {
  const time = AppUtil_DateConverter(taskJSON.utc).GetUTCTime();
  const utcDbPath = AppUtil_DateConverter(taskJSON.utc).DateFormats().dbPath;

  return (
    <Box pl={4}>
      <TouchableOpacity>
        <HStack py={3}>
          <VStack space={1}>
            <TextComponent
              fontFamily={THEMES.fontFamily.Lato_400Regular}
              color={THEMES.color.font.gray60}
              fontSize={THEMES.fontSize.lg}
              text={taskJSON.title}
            />
            <TextComponent
              fontFamily={THEMES.fontFamily.Lato_400Regular}
              color={THEMES.color.font.gray80}
              fontSize={THEMES.fontSize.sm}
              text={time}
            />
          </VStack>
          <Box flex={1} />

          <HStack space={2} alignItems={"center"}>
            <TouchableOpacity>
              <ConfirmFillSVG width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("a")}>
              <CancelFillSVG width={24} height={24} />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </TouchableOpacity>
    </Box>
  );
}

export default React.memo(TaskCardComponent);
