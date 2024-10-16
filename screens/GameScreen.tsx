import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { generateRandomNumBetween } from "@/helpers/generateRandomNumBetween";
import NumberContainer from "@/components/game/NumberContainer";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import FormActions from "@/components/ui/FormActions";
import GuessLogItem from "@/components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

interface GameScreenProps {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomNumBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (isLower: boolean) => {
    if (
      (isLower && currentGuess < userNumber) ||
      (!isLower && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is not true...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (isLower) {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNum = generateRandomNumBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNum);
    setGuessRounds((prev) => [newRandomNum, ...prev]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <FormActions
          primaryActionTitle={<Ionicons name="add" size={24} />}
          onPrimaryAction={() => nextGuessHandler(false)}
          secondaryActionTitle={<Ionicons name="remove" size={24} />}
          onSecondaryAction={() => nextGuessHandler(true)}
        />
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
