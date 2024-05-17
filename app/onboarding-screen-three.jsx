import { CustomButton, Loader } from "../components";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Redirect, router } from "expo-router";

import CustomLinearButton from "../components/CustomLinearButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import { shoppingData } from "../constants/mock-data";
import { useState } from "react";

// import { useGlobalContext } from "../context/GlobalProvider";

const OnboardingScreenThree = () => {
  // const { loading, isLoading } = useState(true);

  // if (!loading && isLogged) return <Redirect href="/home" />;
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex  items-center justify-around h-full px-4">
          <View className="w-full flex flex-row justify-evenly  flex-wrap ">
            {shoppingData.map((item, id) => (
              <Pressable
                key={id}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? `${item.bgColor}` : "",
                    borderColor: pressed ? "none" : "",
                  },
                  styles.pressedButton,
                ]}
                onPress={() => {
                  setTimesPressed((current) => current + 1);
                }}
              >
                {/* {({ pressed }) => (
              <Text className="text-white">
                {pressed ? "Pressed!" : "Press Me"}
              </Text>
            )} */}
                <Text className="text-white">{item.name}</Text>
              </Pressable>
            ))}
          </View>
          {/* <View>
          </View> */}
          {/* <View>
            <Image source={images.UserGroup} resizeMode="contain" />
          </View> */}
          <View className="w-full ">
            <CustomLinearButton
              title="Explore Shop "
              handlePress={() => router.push("/home")}
            />
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pressedButton: {
    padding: 10,
    color: "#ffffff",
    borderWidth: 2,
    borderStyle: "solid",
    // backgroundColor: "#6F7478",
    borderColor: "white",
    borderRadius: 50,
    width: 150,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "",
    fontWeight: "600",
    fontSize: "20px",
    marginBottom: 10,
  },
});
export default OnboardingScreenThree;
