//react
import React from "react";
import { Box, ScrollView, Text, VStack } from "native-base";
import AuthStackHeaderComponent from "../../components/auth/AuthStackHeaderComponent";
import InputComponent from "../../components/InputComponent";
import { THEMES } from "../../themes/Themes";
import { TEXTS } from "../../content/TEXTS";
import TextComponent from "../../components/TextComponent";
import TouchableOpacityComponent from "../../components/TouchableOpacityComponent";
import { useEffect } from "react";
import { useNavigationAuth } from "../../hooks/use-navigation/useNavigationAuth";

function SignUpScreen() {
  const navigationAuth = useNavigationAuth();

  function handleGoBack() {
    navigationAuth.navigate("SignInScreen");
  }

  useEffect(() => {
    console.log("signUpScreen");
  }, []);
  return (
    <Box flex={1}>
      <AuthStackHeaderComponent onPress={handleGoBack} />
      <ScrollView _contentContainerStyle={{ flexGrow: 1 }}>
        <VStack py={10} px={5} space={3}>
          <InputComponent
            text={TEXTS.signUpScreen.inputComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />
          <InputComponent
            text={TEXTS.signUpScreen.inputComponent.text_2}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />
          <InputComponent
            text={TEXTS.signUpScreen.inputComponent.text_3}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />
          <InputComponent
            text={TEXTS.signUpScreen.inputComponent.text_4}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />

          <Text>
            <TextComponent
              text={TEXTS.signUpScreen.textComponent.text_1}
              fontFamily={THEMES.fontFamily.Lato_400Regular}
              color={THEMES.color.font.gray60}
              fontSize={"sm"}
            />{" "}
            <TextComponent
              text={TEXTS.signUpScreen.textComponent.text_2}
              fontFamily={THEMES.fontFamily.Lato_700Bold}
              color={THEMES.color.font.black}
              fontSize={"sm"}
            />{" "}
            <TextComponent
              text={TEXTS.signUpScreen.textComponent.text_3}
              fontFamily={THEMES.fontFamily.Lato_400Regular}
              color={THEMES.color.font.gray60}
              fontSize={"sm"}
            />{" "}
            <TextComponent
              text={TEXTS.signUpScreen.textComponent.text_4}
              fontFamily={THEMES.fontFamily.Lato_700Bold}
              color={THEMES.color.font.black}
              fontSize={"sm"}
            />{" "}
            <TextComponent
              text={TEXTS.signUpScreen.textComponent.text_5}
              fontFamily={THEMES.fontFamily.Lato_400Regular}
              color={THEMES.color.font.gray60}
              fontSize={"sm"}
            />
          </Text>
        </VStack>
        <Box flex={1} />
        <VStack p={5} pt={10}>
          <TouchableOpacityComponent
            text={TEXTS.signInScreen.touchableOpacityComponent.text_3}
            fontFamily={THEMES.fontFamily.Lato_700Bold}
            color={THEMES.color.font.white}
            textTransform={"uppercase"}
            bg={THEMES.color.bg.black}
            fontSize={"md"}
            google={false}
          />
        </VStack>
      </ScrollView>
    </Box>
  );
}
export default React.memo(SignUpScreen);
