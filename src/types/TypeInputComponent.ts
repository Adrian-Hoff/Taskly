//native-base
import { IInputProps } from "native-base";

export type TypeInputComponent = IInputProps & {
  bg: string;
  color: string;
  text: string;
  fontFamily: string;
  fontSize: string;
  error: string | undefined;
};
