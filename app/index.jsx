import { CustomButton, Loader } from "../components";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Redirect, router } from "expo-router";

import CustomLinearButton from "../components/CustomLinearButton";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import { useEffect } from "react";

// import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  // const { loading, isLoading } = useState(true);

  // if (!loading && isLogged) return <Redirect href="/home" />;
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to the next screen after 5 seconds
      router.push("/video");
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <SafeAreaView className="bg-black h-full">
      <Loader isLoading={false} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-evenly items-center h-full px-4 ">
          <Image source={images.logo} resizeMode="contain" />
          {/* <CustomLinearButton
            title="Continue "
            handlePress={() => router.push("/video")}
          /> */}
          {/* 
          <LinearGradient
            // Button Linear Gradient
            colors={["#ff5390", "#f5b341", "#68af6b"]}
            start={{ x: 0.6, y: 0.2 }}
            end={{ x: 0.1, y: 0.2 }}
            locations={[0.5, 0.2, 0]}
            // style={styles.button}
            // className="rounded-xl min-h-[62px] flex flex-row justify-center items-center w-full"
          >
            <TouchableOpacity onPress={() => router.push("/video")}>
              <Text className={`text-primary font-nbold text-lg  `}>
                Continue
              </Text>
            </TouchableOpacity>
          </LinearGradient> */}
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
