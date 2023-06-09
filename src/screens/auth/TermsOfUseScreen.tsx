//react
import React from "react";

import { Box, ScrollView } from "native-base";
import AuthStackHeaderComponent from "../../components/auth/AuthStackHeaderComponent";
import { TEXTS } from "../../content/TEXTS";
import TextComponent from "../../components/TextComponent";
import { THEMES } from "../../themes/Themes";

function TermsOfUseScreen() {
  return (
    <Box flex={1}>
      <AuthStackHeaderComponent
        text={TEXTS.termsOfUseScreen.stackHeaderComponent.text_2}
      />
      <ScrollView
        px={5}
        _contentContainerStyle={{ flexGrow: 1, pt: 10, pb: 32 }}
      >
        <TextComponent
          text={TEXTS.termsOfUseScreen.textComponent.text_1}
          fontFamily={THEMES.fontFamily.Lato_400Regular}
          color={THEMES.color.font.gray60}
          textAlign={"justify"}
          fontSize={"sm"}
        />
      </ScrollView>
    </Box>
  );
}
export default React.memo(TermsOfUseScreen);
