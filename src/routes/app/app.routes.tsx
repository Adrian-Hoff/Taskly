//react-navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//svg
import VectorDashboardFillSVG from "../../assets/VectorDashboardFillSVG.svg";
import VectorDashboardOutlineSVG from "../../assets/VectorDashboardOutlineSVG.svg";
//screens
import DashboardScreen from "../../screens/app/DashboardScreen";
import { Box } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 10,
          borderTopWidth: 0,
          borderRadius: 5,
          shadowColor: "#808080",
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <VectorDashboardFillSVG />
            ) : (
              <VectorDashboardOutlineSVG />
            ),
        }}
        name="dashboardScreen"
        component={DashboardScreen}
      />
    </Tab.Navigator>
  );
}
