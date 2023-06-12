//react
import { useContext } from "react";

//react-navigation
import { NavigationContainer } from "@react-navigation/native";

//routes
import AuthRoutes from "./auth/auth.routes";
import AppRoutes from "./app/app.routes";

//contexts
import { AuthContext } from "../contexts/AuthContext/AuthContext";

export default function Router() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user?.uid ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
