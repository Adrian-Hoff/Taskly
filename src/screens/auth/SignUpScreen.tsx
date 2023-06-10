//react
import React, { useEffect, useState } from "react";

//types
import { TypeSignUpScreenData } from "../../types/@states/auth/SignUpScreen/TypeSignUpScreenData";

//services
import { FirebaseCreateUserWithEmailAndPassword } from "../../services/auth/FirebaseCreateUserWithEmailAndPassword";

//hooks
import { useNavigationAuth } from "../../hooks/use-navigation/useNavigationAuth";
import { useToastHook } from "../../hooks/use-toast/useToastHook";

//themes
import { THEMES } from "../../themes/Themes";

//texts
import { TEXTS } from "../../content/TEXTS";

//native-base
import { Box, ScrollView, Text, VStack } from "native-base";

//components
import AuthStackHeaderComponent from "../../components/auth/AuthStackHeaderComponent";
import InputComponent from "../../components/InputComponent";
import TextComponent from "../../components/TextComponent";
import TouchableOpacityComponent from "../../components/TouchableOpacityComponent";

function SignUpScreen() {
  const [data, setData] = useState<TypeSignUpScreenData>(
    {} as TypeSignUpScreenData
  );
  const toast = useToastHook();
  const navigationAuth = useNavigationAuth();

  function handleGoBack() {
    navigationAuth.navigate("SignInScreen");
  }
  function handleNavigateToTermsOfUseScreen() {
    navigationAuth.navigate("TermsOfUseScreen");
  }
  function handleNavigateToPrivacyPolicyScreen() {
    navigationAuth.navigate("PrivacyPolicyScreen");
  }

  async function handleCreateUserWithEmailAdnPassword() {
    await FirebaseCreateUserWithEmailAndPassword({
      email: data.email,
      password: data.password,
      name: data.name,
      passwordConfirmation: data.passwordConfirmation,
      toast,
    });
  }

  useEffect(() => {
    console.log("SignUpScreen");
  }, []);

  return (
    <Box flex={1}>
      <AuthStackHeaderComponent
        text={TEXTS.signUpScreen.stackHeaderComponent.text_2}
        onPress={handleGoBack}
      />
      <ScrollView _contentContainerStyle={{ flexGrow: 1 }}>
        <VStack py={10} px={5} space={3}>
          <InputComponent
            onChangeText={(name) => setData({ ...data, name })}
            text={TEXTS.signUpScreen.inputComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />
          <InputComponent
            onChangeText={(email) => setData({ ...data, email })}
            text={TEXTS.signUpScreen.inputComponent.text_2}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            fontSize={"md"}
          />
          <InputComponent
            onChangeText={(password) => setData({ ...data, password })}
            text={TEXTS.signUpScreen.inputComponent.text_3}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            type={"password"}
            fontSize={"md"}
          />
          <InputComponent
            onChangeText={(passwordConfirmation) =>
              setData({ ...data, passwordConfirmation })
            }
            text={TEXTS.signUpScreen.inputComponent.text_4}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray60}
            bg={THEMES.color.bg.gray}
            type={"password"}
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
              onPress={handleNavigateToTermsOfUseScreen}
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
              onPress={handleNavigateToPrivacyPolicyScreen}
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
            onPress={handleCreateUserWithEmailAdnPassword}
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
