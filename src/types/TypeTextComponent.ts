import { ITextProps } from "native-base";

export type TypeTextComponent = ITextProps & {
  text: string;
  color: string;
  fontSize: string;
  fontFamily: string;
};
