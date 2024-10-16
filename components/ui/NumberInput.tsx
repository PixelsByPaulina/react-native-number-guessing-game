import { StyleSheet, TextInput } from "react-native";
import Colors from "@/constants/colors";

interface NumberInputProps {
  value: string;
  onChangeText: (newText: string) => void;
}

const NumberInput = ({ value, onChangeText }: NumberInputProps) => {
  return (
    <TextInput
      style={styles.numberInput}
      maxLength={2}
      keyboardType="number-pad"
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: Colors.white,
    borderBottomWidth: 2,
    color: Colors.white,
    marginVertical: 8,
  },
});
