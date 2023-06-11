import { ITextProps } from "native-base";

export type TypeTextComponent = ITextProps & {
  text: string | undefined;
  color: string;
  fontSize: string;
  fontFamily: string;
};
