import { StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/colors";

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

const GuessLogItem = ({ roundNumber, guess }: GuessLogItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    color: Colors.white,
    fontFamily: "open-sans",
  },
});
