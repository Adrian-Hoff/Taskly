//react
import { useEffect } from "react";

//expo
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import * as SplashScreen from "expo-splash-screen";

//routes
import Router from "./src/routes/router";

//native-base
import { Box, NativeBaseProvider, StatusBar } from "native-base";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor="transparent"
        barStyle={"dark-content"}
        translucent
      />
      <Router />
    </NativeBaseProvider>
  );
}
