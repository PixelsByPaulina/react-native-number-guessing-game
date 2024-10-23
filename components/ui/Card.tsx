import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "@/constants/colors";

const Card = ({ children }: PropsWithChildren) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.surfaceMixed500,
    borderRadius: 14,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    maxWidth: 400,
  },
});
