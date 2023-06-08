//react-native
import { TouchableOpacityProps } from "react-native";

//native-base
import { ITextProps } from "native-base";

export type TypeTouchableOpacityGoogleComponent = ITextProps &
  TouchableOpacityProps & {
    bg: string;
    text: string;
    color: string;
    fontSize: string;
    fontFamily: string;
  };
