//react-native
import { TouchableOpacity } from "react-native";

//themes
import { THEMES } from "../themes/Themes";

//svg
import VectorGoogleFillSVG from "../assets/VectorGoogleFillSVG.svg";

//native-base
import { Box, Center, Text } from "native-base";

//components
import { TypeTouchableOpacityComponent } from "../types/TypeTouchableOpacityComponent";

export default function TouchableOpacityComponent({
  bg,
  color,
  text,
  fontFamily,
  fontSize,
  google,
  ...props
}: TypeTouchableOpacityComponent) {
  return (
    <TouchableOpacity {...props}>
      <Center w={"full"} h={"16"} bg={bg} rounded={5} flexDir={"row"}>
        {google ? (
          <>
            <VectorGoogleFillSVG />
            <Box w={3} />
          </>
        ) : (
          <></>
        )}

        <Text
          fontFamily={fontFamily}
          fontSize={fontSize}
          color={color}
          {...props}
        >
          {text}
        </Text>
      </Center>
    </TouchableOpacity>
  );
}
