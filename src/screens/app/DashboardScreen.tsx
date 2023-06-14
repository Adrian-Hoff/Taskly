//react
import React, { useEffect } from "react";

//native-base
import { Box, Flex, ScrollView, VStack } from "native-base";

//components
import DashboardHeaderComponent from "../../components/app/DashboardHeaderComponent";
import InputComponent from "../../components/InputComponent";
import { TEXTS } from "../../content/TEXTS";
import { APP_TEXTS } from "../../content/app/APP_TEXTS";
import { THEMES } from "../../themes/Themes";
import TextComponent from "../../components/TextComponent";

function DashboardScreen() {
  useEffect(() => {
    console.log("DashboardScreen");
  }, []);

  return (
    <Box flex={1}>
      <ScrollView _contentContainerStyle={{ flexGrow: 1, pb: 20 }}>
        <DashboardHeaderComponent />
        <VStack px={5} pt={10} mb={10}>
          <InputComponent
            text={APP_TEXTS.dashboardScreen.inputComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray80}
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

      <Flex flex={1} />
      <Box bg={"white"} h={"20"} />
    </Box>
  );
}

export default React.memo(DashboardScreen);
