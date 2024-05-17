import { CustomButton, Loader } from "../components";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";

import CustomLinearButton from "../components/CustomLinearButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";

// import { useGlobalContext } from "../context/GlobalProvider";

const OnboardingScreenTwo = () => {
  // const { loading, isLoading } = useState(true);

  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex  items-center justify-around h-full px-4">
          <View>
            <Text className="text-white font-nbold text-2xl ">
              All your favorite stores in one place
            </Text>
            <Text className="font-nlight text-xl text-[#9EA3A7]">
              Watch anywhere. Cancel anytime. Tap the link below to sign up.
            </Text>
          </View>
          <View>
            <Image source={images.UserGroup} resizeMode="contain" />
          </View>
          <View className="w-full ">
            <CustomLinearButton
              title="Create New Account "
              handlePress={() => router.push("/sign-up")}
            />
            <CustomButton
              title="Login "
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7 bg-black"
            />
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default OnboardingScreenTwo;
