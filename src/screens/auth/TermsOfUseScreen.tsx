//react
import React from "react";

//hooks
import { useNavigationAuth } from "../../hooks/use-navigation/useNavigationAuth";

//texts
import { TEXTS } from "../../content/TEXTS";

//themes
import { THEMES } from "../../themes/Themes";

//native-base
import { Box, ScrollView } from "native-base";

//components
import AuthStackHeaderComponent from "../../components/auth/AuthStackHeaderComponent";
import TextComponent from "../../components/TextComponent";

function TermsOfUseScreen() {
  const navigationAuth = useNavigationAuth();

  function handleAuthNavigationToSignUpScreen() {
    navigationAuth.navigate("SignUpScreen");
  }
  return (
    <Box flex={1}>
      <AuthStackHeaderComponent
        text={TEXTS.termsOfUseScreen.stackHeaderComponent.text_2}
        onPress={handleAuthNavigationToSignUpScreen}
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
