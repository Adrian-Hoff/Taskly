//navigator
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../../screens/auth/SignInScreen";
import { THEMES } from "../../themes/Themes";

export default function AuthRoutes() {
  const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
}
