import { StyleSheet, Text } from "react-native";
import { PropsWithChildren } from "react";
import Colors from "@/constants/colors";

const Title = ({ children }: PropsWithChildren) => (
  <Text style={styles.title}>{children}</Text>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    color: Colors.white,
    borderWidth: 2,
    borderColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});
