//react
import React, { useEffect } from "react";

//react-native
import { TouchableOpacity } from "react-native";

//svg
import VectorGoogleFillSVG from "../../assets/VectorGoogleFillSVG.svg";

//types
import { TypeTouchableOpacityGoogleComponent } from "../../types/TypeTouchableOpacityGoogleComponent";

//native-base
import { Box, Center, Text } from "native-base";

function TouchableOpacityGoogleComponent({
  color,
  bg,
  text,
  fontSize,
  fontFamily,
  ...props
}: TypeTouchableOpacityGoogleComponent) {
  return (
    <TouchableOpacity {...props}>
      <Center w={"full"} h={"16"} bg={bg} rounded={5} flexDir={"row"}>
        <VectorGoogleFillSVG />
        <Box w={3} />
        <Text
          color={color}
          fontSize={fontSize}
          fontFamily={fontFamily}
          {...props}
        >
          {text}
        </Text>
      </Center>
    </TouchableOpacity>
  );
}

export default React.memo(TouchableOpacityGoogleComponent);
