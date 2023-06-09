import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth/auth.routes";

export default function Router() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
