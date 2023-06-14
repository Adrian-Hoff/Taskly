//react
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//svg
import VectorLogoFillSVG from "../../assets/VectorLogoFillSVG.svg";

//TEXTS
import { APP_TEXTS } from "../../content/app/APP_TEXTS";

//themes
import { THEMES } from "../../themes/Themes";

//contexts
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

//utils
import { AppUtil_DateConverter } from "../../utils/app/AppUtil_DateConverter";

//native-base
import { Box, HStack, VStack } from "native-base";

//components
import TextComponent from "../TextComponent";

function DashboardHeaderComponent() {
  const date = AppUtil_DateConverter(new Date().toUTCString());
  const { user } = useContext(AuthContext);

  return (
    <Box>
      <VStack
        bg={THEMES.color.bg.gray}
        p={5}
        pb={8}
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
            text={APP_TEXTS.dashboardScreen.dashboardHeaderComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            textTransform={"uppercase"}
            fontSize={"2xl"}
          />
          <TextComponent
            text={user?.displayName}
            fontFamily={THEMES.fontFamily.Lato_700Bold}
            color={THEMES.color.font.gray40}
            textTransform={"uppercase"}
            fontSize={"2xl"}
          />
        </Box>
      </VStack>
    </Box>
  );
}

export default React.memo(DashboardHeaderComponent);
