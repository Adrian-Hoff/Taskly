//react
import React from "react";

//themes
import { THEMES } from "../themes/Themes";

//types
import { TypeInputComponent } from "../types/TypeInputComponent";

//native-base
import { Input } from "native-base";

function InputComponent({
  bg,
  color,
  text,
  fontFamily,
  fontSize,
  ...props
}: TypeInputComponent) {
  return (
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
  );
}
export default React.memo(InputComponent);
