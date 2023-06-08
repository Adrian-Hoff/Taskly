//types
import { TypeTextComponent } from "../types/TypeTextComponent";

//native-base
import { Text } from "native-base";

export default function TextComponent({
  text,
  color,
  fontSize,
  fontFamily,
  ...props
}: TypeTextComponent) {
  return (
    <Text color={color} fontSize={fontSize} fontFamily={fontFamily} {...props}>
      {text}
    </Text>
  );
}
