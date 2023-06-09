//navigator
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
  TransitionSpecs,
} from "@react-navigation/stack";

//types
import { TypeRoutesAuth } from "../../types/@routes/auth/TypeNavAuth";

//themes
import { THEMES } from "../../themes/Themes";

//screens
import SignInScreen from "../../screens/auth/SignInScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import TermsOfUseScreen from "../../screens/auth/TermsOfUseScreen";
import PrivacyPolicyScreen from "../../screens/auth/PrivacyPolicyScreen";
import RecoverPasswordScreen from "../../screens/auth/RecoverPasswordScreen";

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
      }}
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="TermsOfUseScreen" component={TermsOfUseScreen} />
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name="RecoverPasswordScreen"
        component={RecoverPasswordScreen}
      />
    </Stack.Navigator>
  );
}
