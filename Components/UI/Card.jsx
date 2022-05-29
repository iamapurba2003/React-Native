import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
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
});
