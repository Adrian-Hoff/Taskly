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

function SignInHeaderComponent() {
  return (
    <Box bg={THEMES.color.bg.gray} pb={10} pt={"32"} px={5}>
      <TextComponent
        text={TEXTS.signInScreen.dashboardHeaderComponent.text_1}
        fontFamily={THEMES.fontFamily.Lato_700Bold}
        color={THEMES.color.font.gray20}
        textTransform={"uppercase"}
        fontSize="2xl"
      />
      <TextComponent
        text={TEXTS.signInScreen.dashboardHeaderComponent.text_2}
        fontFamily={THEMES.fontFamily.Lato_400Regular}
        color={THEMES.color.font.gray60}
        textTransform={"uppercase"}
        fontSize="2xl"
      />
    </Box>
  );
}
export default React.memo(SignInHeaderComponent);
