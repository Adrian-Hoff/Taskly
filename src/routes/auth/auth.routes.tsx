//navigator
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../../screens/auth/SignInScreen";
import { THEMES } from "../../themes/Themes";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import { TypeRoutesAuth } from "../../types/@routes/auth/TypeNavAuth";

export default function AuthRoutes() {
  const Stack = createStackNavigator<TypeRoutesAuth>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: THEMES.color.bg.white,
        },
        freezeOnBlur: true,
      }}
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
