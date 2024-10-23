import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
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
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 440) {
    imageSize = 100;
  }

  const imageStyles = {
    width: imageSize,
    height: imageSize,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/success.png")}
            style={[styles.image, imageStyles]}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{countOfRounds}</Text> rounds to guess
          the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 32,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 4,
    borderColor: Colors.white,
    overflow: "hidden",
    marginBottom: 12,
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
