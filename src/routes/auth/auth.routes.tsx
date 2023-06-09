//navigator
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
  TransitionSpecs,
} from "@react-navigation/stack";
import SignInScreen from "../../screens/auth/SignInScreen";
import { THEMES } from "../../themes/Themes";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import { TypeRoutesAuth } from "../../types/@routes/auth/TypeNavAuth";
import TermsOfUseScreen from "../../screens/auth/TermsOfUseScreen";
import PrivacyPolicyScreen from "../../screens/auth/PrivacyPolicyScreen";

export default function AuthRoutes() {
  const Stack = createStackNavigator<TypeRoutesAuth>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: THEMES.color.bg.white,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureDirection: "horizontal-inverted",
        headerMode: "screen",
      }}
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="TermsOfUseScreen" component={TermsOfUseScreen} />
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
    </Stack.Navigator>
  );
}
