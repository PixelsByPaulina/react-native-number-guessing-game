import { View, Text } from "react-native";
import { PropsWithChildren } from "react";

const PrimaryButton = ({ children }: PropsWithChildren) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
