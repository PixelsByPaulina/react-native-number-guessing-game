import { StyleSheet, Text, View, Dimensions } from "react-native";
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

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  outerContainer: {
    alignSelf: "center",
    marginVertical: 12,
  },
  innerContainer: {
    borderWidth: 4,
    borderColor: Colors.primary300,
    borderRadius: 300,
    height: deviceHeight < 380 ? 80 : 120,
    width: deviceHeight < 380 ? 80 : 120,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary300,
    fontFamily: "open-sans-bold",
    fontSize: deviceHeight < 380 ? 36 : 42,
  },
});
