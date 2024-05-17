import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const CustomLinearButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <LinearGradient
      colors={["#ff5390", "#f5b341", "#68af6b"]}
      start={{ x: 0.6, y: 0.2 }}
      end={{ x: 0.1, y: 0.2 }}
      locations={[0.5, 0.2, 0]}
      className={`${containerStyles} rounded-xl min-h-[62px] flex flex-row justify-center items-center w-full`}
    >
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`w-full flex justify-center items-center ${
          isLoading ? "opacity-50" : ""
        } `}
        disabled={isLoading}
      >
        <Text className={`text-primary font-nbold text-lg ${textStyles}  `}>
          {title}
        </Text>

        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color="#fff"
            size="small"
            className="ml-2"
          />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomLinearButton;
