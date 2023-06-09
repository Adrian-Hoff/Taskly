//react
import React from "react";

//svg
import ArrowLeftFillSVG from "../../assets/ArrowLeftFillSVG.svg";

//react-native
import { TouchableOpacity } from "react-native";

//themes
import { THEMES } from "../../themes/Themes";

//texts
import { TEXTS } from "../../content/TEXTS";

//native-base
import { HStack, VStack } from "native-base";

//components
import TextComponent from "../TextComponent";
import { useNavigationAuth } from "../../hooks/use-navigation/useNavigationAuth";

function AuthStackHeaderComponent({ text, ...props }) {
  return (
    <VStack p={5} pt={10} bg={THEMES.color.bg.gray} rounded={10}>
      <TouchableOpacity {...props}>
        <HStack alignItems={"center"} space={2}>
          <ArrowLeftFillSVG />
          <TextComponent
            text={TEXTS.signUpScreen.stackHeaderComponent.text_1}
            fontFamily={THEMES.fontFamily.Lato_400Regular}
            color={THEMES.color.font.gray40}
            textTransform={"uppercase"}
            fontSize={"sm"}
          />
        </HStack>
      </TouchableOpacity>
      <TextComponent
        text={text}
        fontFamily={THEMES.fontFamily.Lato_700Bold}
        color={THEMES.color.font.gray20}
        textTransform={"uppercase"}
        fontSize={"lg"}
      />
    </VStack>
  );
}

export default React.memo(AuthStackHeaderComponent);
