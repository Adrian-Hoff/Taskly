//react

//expo

//firebaseConfig
import { app } from "./src/firebase/config";

//routes
import Router from "./src/routes/router";

//contexts
import AuthContextProvider from "./src/contexts/AuthContext/AuthContext";

//native-base
import { NativeBaseProvider, StatusBar } from "native-base";
import CurrentTaskContextProvider from "./src/contexts/app/CurrentTaskContext";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  app;
  // let [fontsLoaded] = useFonts({
  //   Lato_300Light,
  //   Lato_400Regular,
  //   Lato_700Bold,
  // });

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <AuthContextProvider>
      <CurrentTaskContextProvider>
        <NativeBaseProvider>
          <StatusBar
            backgroundColor="transparent"
            barStyle={"dark-content"}
            translucent
          />
          <Router />
        </NativeBaseProvider>
      </CurrentTaskContextProvider>
    </AuthContextProvider>
  );
}
