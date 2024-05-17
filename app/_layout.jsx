import "react-native-url-polyfill/auto";

import { Link, SplashScreen, Stack } from "expo-router";

import { AntDesign } from "@expo/vector-icons";
// import GlobalProvider from "../context/GlobalProvider";
import { useEffect } from "react";
import { useFonts } from "expo-font";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "NetflixSans-Bold": require("../assets/fonts/NetflixSans-Bold.otf"),
    "NetflixSans-Light": require("../assets/fonts/NetflixSans-Light.otf"),
    "NetflixSans-Medium": require("../assets/fonts/NetflixSans-Medium.otf"),
    "NetflixSans-Regular": require("../assets/fonts/NetflixSans-Regular.otf"),
  });

  useEffect(() => {
    if (error) throw error;
    // console.log(error, "This is error");
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      // console.log("I worked and loaded");
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    // <GlobalProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="video" options={{ headerShown: false }} />
      <Stack.Screen
        name="onboarding-screen-two"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="onboarding-screen-three"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
    </Stack>
    // </GlobalProvider>
  );
};

export default RootLayout;
