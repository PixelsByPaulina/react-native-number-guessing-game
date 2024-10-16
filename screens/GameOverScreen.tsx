import { Image, StyleSheet, Text, View } from "react-native";
import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import PrimaryButton from "@/components/ui/CustomButton";

interface GameOverScreenProps {
  countOfRounds: number;
  userNumber: number;
  onStartNewGame: () => void;
}

const GameOverScreen = ({
  countOfRounds,
  userNumber,
  onStartNewGame,
}: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{countOfRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.white,
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    color: Colors.white,
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary300,
  },
});
