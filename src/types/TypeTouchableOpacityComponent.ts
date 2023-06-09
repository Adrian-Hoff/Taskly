//react-native
import { TouchableOpacityProps } from "react-native";

//native-base
import { ITextProps } from "native-base";

export type TypeTouchableOpacityComponent = ITextProps &
  TouchableOpacityProps & {
    bg: string;
    text: string;
    color: string;
    google: boolean;
    fontSize: string;
    fontFamily: string;
  };
