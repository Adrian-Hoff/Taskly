//react
import React, { useEffect, useState } from "react";

//react-hook-form
import { Controller, useForm } from "react-hook-form";

//yup
import { yupResolver } from "@hookform/resolvers/yup";

//form-schemas
import SignUpFormSchema from "../../schemas/form/auth/SignUpFormSchema";

//types
import { TypeSignUpScreenForm } from "../../types/@states/auth/SignUpScreen/TypeSignUpScreenForm";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeSignUpScreenForm>({
    resolver: yupResolver(SignUpFormSchema),
  });
  const navigationAuth = useNavigationAuth();
  const toast = useToastHook();

  function handleGoBack() {
    navigationAuth.navigate("SignInScreen");
  }
  function handleNavigateToTermsOfUseScreen() {
    navigationAuth.navigate("TermsOfUseScreen");
  }
  function handleNavigateToPrivacyPolicyScreen() {
    navigationAuth.navigate("PrivacyPolicyScreen");
  }

  async function handleCreateUserWithEmailAndPassword(
    data: TypeSignUpScreenForm
  ) {
    await FirebaseCreateUserWithEmailAndPassword({
      email: data.email,
      password: data.password,
      name: data.name,
      passwordConfirmation: data.passwordConfirmation,
      toast,
    });
    console.log(data);
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
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputComponent
                  text={TEXTS.signUpScreen.inputComponent.text_1}
                  fontFamily={THEMES.fontFamily.Lato_400Regular}
                  color={THEMES.color.font.gray60}
                  error={errors.name?.message}
                  bg={THEMES.color.bg.gray}
                  onChangeText={onChange}
                  fontSize={"md"}
                  onBlur={onBlur}
                  value={value}
                />
              </>
            )}
            defaultValue={""}
            name={"name"}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputComponent
                  text={TEXTS.signUpScreen.inputComponent.text_2}
                  fontFamily={THEMES.fontFamily.Lato_400Regular}
                  color={THEMES.color.font.gray60}
                  error={errors.email?.message}
                  bg={THEMES.color.bg.gray}
                  onChangeText={onChange}
                  fontSize={"md"}
                  onBlur={onBlur}
                  value={value}
                />
              </>
            )}
            defaultValue={""}
            name={"email"}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputComponent
                  text={TEXTS.signUpScreen.inputComponent.text_3}
                  fontFamily={THEMES.fontFamily.Lato_400Regular}
                  color={THEMES.color.font.gray60}
                  error={errors.password?.message}
                  bg={THEMES.color.bg.gray}
                  onChangeText={onChange}
                  fontSize={"md"}
                  onBlur={onBlur}
                  value={value}
                />
              </>
            )}
            defaultValue={""}
            name={"password"}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                text={TEXTS.signUpScreen.inputComponent.text_4}
                fontFamily={THEMES.fontFamily.Lato_400Regular}
                error={errors.passwordConfirmation?.message}
                color={THEMES.color.font.gray60}
                bg={THEMES.color.bg.gray}
                onChangeText={onChange}
                fontSize={"md"}
                onBlur={onBlur}
                value={value}
              />
            )}
            defaultValue={""}
            name={"passwordConfirmation"}
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
            onPress={handleSubmit(handleCreateUserWithEmailAndPassword)}
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
