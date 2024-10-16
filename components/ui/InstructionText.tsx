import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import Colors from "@/constants/colors";

interface InstructionTextProps extends PropsWithChildren {
  style?: StyleProp<TextStyle>;
}

const InstructionText = ({ children, style }: InstructionTextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.primary300,
    fontSize: 20,
  },
});
