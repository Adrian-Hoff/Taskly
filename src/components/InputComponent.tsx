//react
import React, { useEffect, useState } from "react";

//react-native
import { LayoutAnimation } from "react-native";

//themes
import { THEMES } from "../themes/Themes";

//types
import { TypeInputComponent } from "../types/TypeInputComponent";

//native-base
import { Box, Input } from "native-base";

//components
import TextComponent from "./TextComponent";

function InputComponent({
  bg,
  color,
  text,
  fontFamily,
  fontSize,
  error,
  ...props
}: TypeInputComponent) {
  const [isErrorVisible, setIsErrorVisible] = useState(!!error);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsErrorVisible(!!error);
  }, [error]);

  return (
    <Box bg={THEMES.color.bg.gray} rounded={5}>
      <Input
        pl={5}
        color={color}
        placeholder={text}
        bg={bg}
        borderWidth={0}
        _focus={{
          bg: bg,
        }}
        h={16}
        rounded={5}
        fontSize={fontSize}
        fontFamily={fontFamily}
        {...props}
      />
      <Box
        overflow={"hidden"}
        h={isErrorVisible ? "auto" : 0}
        p={isErrorVisible ? 2 : 0}
        pt={0}
        rounded={5}
        flexDir={"row"}
      >
        <TextComponent
          fontSize={"sm"}
          color={THEMES.color.font.white}
          px={2}
          fontFamily={THEMES.fontFamily.Lato_700Bold}
          rounded={5}
          text={error}
          bg={"red.500"}
        />
        <Box flex={1} />
      </Box>
    </Box>
  );
}
export default React.memo(InputComponent);
