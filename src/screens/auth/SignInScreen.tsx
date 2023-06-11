//react
import React, { useEffect } from "react";

//native-base
import { Box, Center, ScrollView, Text, VStack } from "native-base";

//themes
import { THEMES } from "../../themes/Themes";

//texts
import { TEXTS } from "../../content/TEXTS";

//hooks
import { useNavigationAuth } from "../../hooks/use-navigation/useNavigationAuth";

//components
import TouchableOpacityComponent from "../../components/TouchableOpacityComponent";
import InputComponent from "../../components/InputComponent";
import TextComponent from "../../components/TextComponent";
import SignInHeaderComponent from "../../components/auth/SignInHeaderComponent";

function SignInScreen() {
  const navigationAuth = useNavigationAuth();

  function handleNavigateToSignUpScreen() {
    navigationAuth.navigate("SignUpScreen");
  }

  function handleNavigateToRecoverPasswordScreen() {
    navigationAuth.navigate("RecoverPasswordScreen");
  }

  useEffect(() => {
    console.log("signInScreen");
  }, []);

  return (
    <Box flex={1}>
      <ScrollView _contentContainerStyle={{ flexGrow: 1 }}>
        <SignInHeaderComponent />

        <VStack pt={10} px={5} space={3}>
          <InputComponent
            text={TEXTS.signInScreen.inputComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />

          <InputComponent
            text={TEXTS.signInScreen.inputComponent.text_2}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />

          {/* <TextComponent
            text={TEXTS.signInScreen.textComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_700Bold}
            color={THEMES.color.font.gray60}
            textTransform={"uppercase"}
            fontSize={"md"}
            textAlign={"center"}
          />

          <TouchableOpacityComponent
            text={TEXTS.signInScreen.touchableOpacityComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_700Bold}
            color={THEMES.color.font.black}
            textTransform={"uppercase"}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
            google={true}
          /> */}
        </VStack>
        <Box flex={1} />
        <VStack space={3} p={5} pt={10}>
          <Center flexDirection={"row"}>
            <TextComponent
              fontFamily={THEMES.fontFamily.Lato_400Regular}
              text={TEXTS.signInScreen.textComponent.text_2}
              color={THEMES.color.font.gray60}
              fontSize={"sm"}
            />
            <TextComponent
              onPress={handleNavigateToRecoverPasswordScreen}
              text={TEXTS.signInScreen.textComponent.text_3}
              fontFamily={THEMES.fontFamily.Lato_700Bold}
              color={THEMES.color.font.black}
              fontSize={"sm"}
            />
          </Center>
          <TouchableOpacityComponent
            text={TEXTS.signInScreen.touchableOpacityComponent.text_2}
            fontFamily={THEMES.fontFamily.Lato_700Bold}
            color={THEMES.color.font.white}
            textTransform={"uppercase"}
            bg={THEMES.color.bg.black}
            fontSize={"md"}
            google={false}
          />
          <TouchableOpacityComponent
            text={TEXTS.signInScreen.touchableOpacityComponent.text_3}
            fontFamily={THEMES.fontFamily.Lato_700Bold}
            onPress={handleNavigateToSignUpScreen}
            color={THEMES.color.font.black}
            textTransform={"uppercase"}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
            google={false}
          />
        </VStack>
      </ScrollView>
    </Box>
  );
}
export default React.memo(SignInScreen);
