import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { CustomButton, FormField } from "../../components";
import { Link, router } from "expo-router";

import CustomLinearButton from "../../components/CustomLinearButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { useState } from "react";

// import { getCurrentUser, signIn } from "../../lib/appwrite";
// import { useGlobalContext } from "../../context/GlobalProvider";
// console.log(Dimensions, "This is dimension");
const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  // const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const submit = async () => {
  //   if (form.email === "" || form.password === "") {
  //     Alert.alert("Error", "Please fill in all fields");
  //   }

  //   setSubmitting(true);

  //   try {
  //     await signIn(form.email, form.password);
  //     const result = await getCurrentUser();
  //     setUser(result);
  //     setIsLogged(true);

  //     Alert.alert("Success", "User signed in successfully");
  //     router.replace("/home");
  //   } catch (error) {
  //     Alert.alert("Error", error.message);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className=" flex justify-center items-center">
            <Image
              source={images.logo}
              resizeMode="contain"
              // className="w-[115px] h-[34px]"
            />

            <Text className="text-lg font-nlight text-[#9EA3A7] mt-2  text-center">
              Sign in to your account and explore your favourite shops
            </Text>
          </View>

          {/* <FormField
            title="Full Name"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Phone Number"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="number-pad"
          /> */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder={"Email"}
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder={"Password"}
          />
          <View>
            <TextInput />
            <Text>hello</Text>
          </View>
          <CustomLinearButton
            title="Login "
            handlePress={() => router.push("/sign-in")}
          />
          <CustomButton
            title={"Continue With Google"}
            containerStyles={"mt-7 border-2 border-white"}
            icon1={"google"}
          />
          <CustomButton
            title={"Continue With Facebook"}
            containerStyles={"mt-7 border-2 border-white"}
            icon1={"facebook"}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-white "
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
