//expo
// import { StatusBar } from "expo-status-bar";

//native-base
import { Box, NativeBaseProvider, StatusBar } from "native-base";

export default function App() {
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
