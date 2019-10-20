import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    // setCourseGoals([...courseGoals, enteredGoal]); can't give us gurantee of adding 
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [...courseGoals, {uid: Math.random().toString(), value: goalTitle}]);  // always work
    setIsAddMode(false);  
    //will set state change at once and re-render once
  }
  
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);     
  }

  return (
    <View style={styles.container}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
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
