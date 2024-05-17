import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  googleIcon,
  icon1,
}) => {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "google":
        return <AntDesign name={iconName} size={24} color="white" />;
      case "facebook":
        return <FontAwesome5 name={iconName} size={24} color="white" />;
      // Add cases for other icons as needed
      default:
        return null;
    }
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={` rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading}
    >
      <View className="flex flex-row items-center justify-center space-x-3">
        {icon1 && renderIcon(icon1)}
        <Text
          className={`text-primary font-nbold text-lg ${textStyles} text-white `}
        >
          {title}
        </Text>
      </View>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
