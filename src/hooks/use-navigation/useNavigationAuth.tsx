//react-navigate
import { useNavigation } from "@react-navigation/native";

//type
import {
  TypeRoutesAuth,
  TypeNavigationScreensAuth,
} from "../../types/@routes/auth/TypeNavAuth";

export function useNavigationAuth() {
  const navigation = useNavigation<TypeNavigationScreensAuth>();

  function navigateToScreen(screen: keyof TypeRoutesAuth) {
    navigation.navigate(screen);
  }

  return {
    navigateToScreen,
  };
}
