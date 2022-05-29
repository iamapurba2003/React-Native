import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

const InstructionText = ({ children, style }) => {
  return (
    <Text
      style={[
        { fontFamily: "open-sans", color: Colors.accent500, fontSize: 24 },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({});
