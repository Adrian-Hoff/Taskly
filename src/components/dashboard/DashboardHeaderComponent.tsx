// native-base
import { Box } from "native-base";
import TextComponent from "../TextComponent";
import { TEXTS } from "../../content/TEXTS";
import { THEMES } from "../../themes/Themes";

export default function DashboardHeaderComponent() {
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
