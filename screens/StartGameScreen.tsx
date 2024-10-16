import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import FormActions from "@/components/ui/FormActions";
import NumberInput from "@/components/ui/NumberInput";

interface StartGameScreenProps {
  onPickNumber: (pickedNumber: number) => void;
}

const StartGameScreen = ({ onPickNumber }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "The number has to be between 1 and 99.", [
        { text: "Ok", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <NumberInput value={enteredNumber} onChangeText={numberInputHandler} />
        <FormActions
          primaryActionTitle="Confirm"
          onPrimaryAction={confirmInputHandler}
          secondaryActionTitle="Reset"
          onSecondaryAction={resetInputHandler}
        />
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
});
