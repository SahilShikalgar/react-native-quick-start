import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    // setCourseGoals([...courseGoals, enteredGoal]); can't give us gurantee of adding 
    setCourseGoals(currentGoals => [...courseGoals, {uid: Math.random().toString(), value: goalTitle}]);  // always work
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        data={courseGoals} 
        keyExtractor={(item) => item.uid}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            onDeleteGoal={removeGoalHandler.bind(this, itemData.item.uid)}
          />
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
