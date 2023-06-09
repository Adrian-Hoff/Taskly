//native-stack
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TypeRoutesAuth = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

type Props = NativeStackScreenProps<TypeRoutesAuth>;
export type TypeNavigationScreensAuth = Props["navigation"];
