//react
import { useCallback } from "react";

//expo
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import * as SplashScreen from "expo-splash-screen";

//native-base
import { Box, NativeBaseProvider, StatusBar } from "native-base";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <StatusBar
          backgroundColor="transparent"
          barStyle={"dark-content"}
          translucent
        />
      </Box>
    </NativeBaseProvider>
  );
}
