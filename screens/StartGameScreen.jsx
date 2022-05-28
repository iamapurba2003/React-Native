import React from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Components/UI/PrimaryButton";
import { Colors } from "../utils/colors";

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = React.useState("");

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be a number b/w 1 & 99", [
        {
          text: "Okay",
          style: 'destructive',
          onPress: () => setEnteredNumber(""),
        },
      ]);
      return;
    }

    onPickNumber(choosenNumber);

  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none" // Serves No Purpose Here, But in Handy When We don't want to Auto Capitalize our Values from the Keyboard
        autoCorrect={false} // Turns off Auto Correction for all Keyboard
        value={enteredNumber}
        onChangeText={(enteredText) => setEnteredNumber(enteredText)}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={() => setEnteredNumber("")}>
            Reset
          </PrimaryButton>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10, // Android Specific Component for Adding Shadwos
    shadowColor: "black", // iOS Specific Shadow
    shadowOffset: { width: 0, height: 2 }, // This Adds Shadows to iOS Platform
    shadowRadius: 6, // iOS Specific Shadow Styling
    shadowOpacity: 0.25, // iOS Specific Shadow Styling for Opacity
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
