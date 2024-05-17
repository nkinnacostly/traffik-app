import { CustomButton, Loader } from "../components";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";

import CustomLinearButton from "../components/CustomLinearButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";

// import { useGlobalContext } from "../context/GlobalProvider";

const Video = () => {
  // const { loading, isLoading } = useState(true);

  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-around items-center h-full px-4">
          {/* <ImageBackground source={images.Onboarding} resizeMode="contain" className="w-full g">
          </ImageBackground> */}
          <Text className="text-white font-nbold text-2xl text-center">
            This is where the onboarding video is going to be
          </Text>
          <CustomLinearButton
            title="Continue "
            handlePress={() => router.push("/onboarding-screen-two")}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Video;
