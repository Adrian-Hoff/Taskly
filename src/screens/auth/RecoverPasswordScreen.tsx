//react
import React from "react";

//hooks
import { useNavigationAuth } from "../../hooks/use-navigation/useNavigationAuth";

//themes
import { THEMES } from "../../themes/Themes";

//texts
import { TEXTS } from "../../content/TEXTS";

//native-base
import { Box, ScrollView, VStack } from "native-base";

//components
import AuthStackHeaderComponent from "../../components/auth/AuthStackHeaderComponent";
import InputComponent from "../../components/InputComponent";
import TextComponent from "../../components/TextComponent";
import TouchableOpacityComponent from "../../components/TouchableOpacityComponent";

function RecoverPasswordScreen() {
  const navigationAuth = useNavigationAuth();

  function handleNavigateToSignInScreen() {
    navigationAuth.navigate("SignInScreen");
  }

  return (
    <Box flex={1}>
      <AuthStackHeaderComponent
        text={TEXTS.recoverPasswordScreen.stackHeaderComponent.text_2}
        onPress={handleNavigateToSignInScreen}
      />
      <ScrollView
        _contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack pt={10} px={5} space={5}>
          <InputComponent
            text={TEXTS.recoverPasswordScreen.inputComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />
          <TextComponent
            text={TEXTS.recoverPasswordScreen.textComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            textAlign={"justify"}
            fontSize={"md"}
          />
        </VStack>
        <Box flex={1} />
        <VStack p={5} pt={10}>
          <TouchableOpacityComponent
            text={TEXTS.recoverPasswordScreen.touchableOpacityComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_700Bold}
            color={THEMES.color.font.white}
            bg={THEMES.color.bg.black}
            fontSize={"md"}
            google={false}
          />
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default React.memo(RecoverPasswordScreen);
