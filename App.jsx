import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [goal, setGoal] = React.useState('')
  const [goals, setGoals] = React.useState([]); 
  const goalSubmitHandler = () => {
    setGoal('')
    setGoals(prevSnap => {
      return [...prevSnap, {id: Math.random(), value: goal}]
    })
  }

  const goalDeleteHandler = id => {
    setGoals(prevSnap => {
      return prevSnap.filter(goal => goal.id !== id)
    })
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Course Goal" style={styles.textInput} onChange={(e) => setGoal(e.target.value)} value={goal} />
        <Button title="Add Goal" onPress={goalSubmitHandler}/>
      </View>
      <View>
        <Text>{goals.map((goal) => {
          return (
            <View style={styles.goals} key={goal.id}>
              <Text style={{marginRight: 5}} >{goal.value}</Text>
              <Button title="Delete" onPress={() => goalDeleteHandler(goal.id)} />
            </View>
          )
        })}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    marginBottom: 8,
    padding: 8
  },
  goals: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10 
  },
  container: {
    flexDirection: "column"
  }
  
});
