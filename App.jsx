import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  ToastAndroid,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = React.useState([]);
  const [modalIsVisibleState, setModalIsVisibleState] = React.useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisibleState(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisibleState(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevSnap) => {
      return [
        ...prevSnap,
        { text: enteredGoalText, id: Math.random().toString() },
      ];
    });
    ToastAndroid.showWithGravity(
      `Goal Added! for ${enteredGoalText}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    ); // Uses the Androids Native ToastAndroid Module for Displaying Toasts, and Hence is only Visible in Android
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prevSnap) => {
      return prevSnap.filter((goal) => goal.id !== id);
    });
    ToastAndroid.showWithGravity(
      "Goal Removed!!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    ); // ToastAndroid Module is Being used to Render Toasts here, Native in Android hence Won't Work in IOS
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {modalIsVisibleState && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalIsVisibleState}
            onCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Add New Goal"
            color="#a065ec"
            onPress={startAddGoalHandler}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
