import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PropsWithChildren } from "react";
import Colors from "@/constants/colors";

interface PrimaryButtonProps extends PropsWithChildren {
  onPress: (event: GestureResponderEvent) => void;
  variant?: "primary" | "secondary";
}

const CustomButton = ({
  children,
  onPress,
  variant = "primary",
}: PrimaryButtonProps) => {
  const isPrimaryButton = variant === "primary";

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed,
          isPrimaryButton && styles.primaryButtonInnerContainer,
        ]}
        onPress={onPress}
        android_ripple={{
          color: isPrimaryButton ? Colors.primary500 : Colors.surfaceMixed400,
        }}
      >
        <Text
          style={[
            styles.buttonText,
            isPrimaryButton && styles.primaryButtonText,
          ]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderRadius: 28,
    borderColor: Colors.surfaceMixed100,
  },
  primaryButtonInnerContainer: {
    backgroundColor: Colors.primary300,
    borderColor: Colors.primary300,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.white,
  },
  primaryButtonText: {
    color: Colors.surface600,
  },
  pressed: {
    opacity: 0.8,
  },
});
