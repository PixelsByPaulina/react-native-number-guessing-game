import { StyleSheet, Text, View } from "react-native";
import { PropsWithChildren } from "react";
import Colors from "@/constants/colors";

const NumberContainer = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.numberText}>{children}</Text>
      </View>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  outerContainer: {
    alignSelf: "center",
    marginVertical: 24,
  },
  innerContainer: {
    borderWidth: 4,
    borderColor: Colors.primary300,
    borderRadius: 300,
    padding: 24,
    height: 120,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary300,
    fontFamily: "open-sans-bold",
    fontSize: 42,
  },
});
