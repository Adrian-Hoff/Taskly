//react-navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import DashboardScreen from "../../screens/app/DashboardScreen";

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboardScreen" component={DashboardScreen} />
    </Tab.Navigator>
  );
}
