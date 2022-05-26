import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }} // Creates a Ripple Effect for the Android Platform Specifially, More Like a animation, but With Easy to Implement APIs
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem } // Mocks a Ripple Effect for IOS Devices specifically 
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    justifyContent: "center",
    alignItems: "center"
},
pressedItem: {
    opacity: 0.5,
},
goalText: {
    color: "white",
    padding: 8,
  },
});
