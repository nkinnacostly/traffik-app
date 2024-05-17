import { Alert, Dimensions, Image, ScrollView, Text, View } from "react-native";
import { CustomButton, FormField } from "../../components";
import { Link, router } from "expo-router";

import Checkbox from "expo-checkbox";
import CustomLinearButton from "../../components/CustomLinearButton";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
// import { createUser } from "../../lib/appwrite";
import { images } from "../../constants";
// import { useGlobalContext } from "../../context/GlobalProvider";
import { useState } from "react";

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    FullName: "",
    email: "",
    password: "",
  });

  // const submit = async () => {
  //   if (form.username === "" || form.email === "" || form.password === "") {
  //     Alert.alert("Error", "Please fill in all fields");
  //   }

  //   setSubmitting(true);
  //   try {
  //     const result = await createUser(form.email, form.password, form.username);
  //     setUser(result);
  //     setIsLogged(true);

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
          // style={{
          //   minHeight: Dimensions.get("window").height - 100,
          // }}
        >
          <View className=" flex justify-center items-center">
            <Image
              source={images.logo}
              resizeMode="contain"
              // className="w-[115px] h-[34px]"
            />

            <Text className="text-lg font-medium text-[#9EA3A7] mt-2 font-nlight text-center">
              Create an account and explore your favourite shops
            </Text>
          </View>

          <FormField
            title="FullName"
            value={form.FullName}
            handleChangeText={(e) => setForm({ ...form, FullName: e })}
            otherStyles="mt-10"
            placeholder={"Enter Full Name"}
          />

          <FormField
            title="Phone Number"
            // value={form.email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="number-pad"
            placeholder={"Enter Phone Number"}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder={"Enter Email"}
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder={"Password"}
          />

          <CustomLinearButton
            title="Create New Account"
            handlePress={() => router.push("/onboarding-screen-three")}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
          />

          <View className="flex items-center flex-row mt-5 space-x-2">
            {/* <Entypo name="circle" size={18} color="gray" /> */}
            <Checkbox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              className="rounded-full"
            />
            <View className="flex flex-row items-center space-x-1">
              <Text className="text-white">I agree to</Text>
              <Link href={""} className="text-green-500">
                Terms & Conditions
              </Link>
            </View>
          </View>
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

          <View className="flex justify-center py-5 flex-row gap-2">
            <Text className="text-lg text-[#9EA3A7] font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg font-nbold text-white">
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
