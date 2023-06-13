import { ITextProps } from "native-base";

export type TypeTextComponent = ITextProps & {
  text: string | undefined | null;
  color: string;
  fontSize: string;
  fontFamily: string;
};
