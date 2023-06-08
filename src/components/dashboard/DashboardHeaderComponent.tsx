//react
import React from "react";

//themes
import { THEMES } from "../../themes/Themes";

//texts
import { TEXTS } from "../../content/TEXTS";

// native-base
import { Box } from "native-base";

//components
import TextComponent from "../TextComponent";

function DashboardHeaderComponent() {
  return (
    <Box bg={THEMES.color.bg.gray} pb={10} pt={"32"} px={5}>
      <TextComponent
        text={TEXTS.signInScreen.dashboardHeaderComponent.text_1}
        color={THEMES.color.font.gray20}
        fontSize="2xl"
        fontFamily={THEMES.fontFamily.Lato_700Bold}
        textTransform={"uppercase"}
      />
      <TextComponent
        text={TEXTS.signInScreen.dashboardHeaderComponent.text_2}
        color={THEMES.color.font.gray60}
        fontSize="2xl"
        fontFamily={THEMES.fontFamily.Lato_400Regular}
        textTransform={"uppercase"}
      />
    </Box>
  );
}
export default React.memo(DashboardHeaderComponent);
