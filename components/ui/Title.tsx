import { StyleSheet, Text, Platform, Dimensions } from "react-native";
import { PropsWithChildren } from "react";
import Colors from "@/constants/colors";

const Title = ({ children }: PropsWithChildren) => (
  <Text style={styles.title}>{children}</Text>
);

export default Title;

const deviceHeight = Dimensions.get("window").height;
// Dimensions.get only runs one time on render and is not updated if user rotates the device
// OK to use in some cases, e.g. supporting only portrait mode

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    color: Colors.white,
    // borderWidth: Platform.OS === "android" ? 2 : 4, // Platform specific styling can be done this way, or as below
    borderWidth: Platform.select({ ios: 4, android: 2 }), // This approach is easier to read when more customisation is needed
    borderColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: deviceHeight < 380 ? 24 : 36,
    maxWidth: "80%",
  },
});
