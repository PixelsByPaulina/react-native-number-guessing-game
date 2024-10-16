import { StyleSheet, View } from "react-native";
import { ReactElement } from "react";
import CustomButton from "@/components/ui/CustomButton";

interface FormActionsProps {
  primaryActionTitle: ReactElement | string;
  onPrimaryAction: () => void;
  secondaryActionTitle: ReactElement | string;
  onSecondaryAction: () => void;
}

const FormActions = ({
  primaryActionTitle,
  onPrimaryAction,
  secondaryActionTitle,
  onSecondaryAction,
}: FormActionsProps) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onSecondaryAction} variant="secondary">
          {secondaryActionTitle}
        </CustomButton>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onPrimaryAction}>
          {primaryActionTitle}
        </CustomButton>
      </View>
    </View>
  );
};

export default FormActions;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
