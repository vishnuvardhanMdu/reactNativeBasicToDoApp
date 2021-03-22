import React, { useState  } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { FAB } from 'react-native-paper';


import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import list from '../logic/list';

export default function page1() {
// let list1 = new ToDoList();

const [goalList, setGoal] = useState([]);
const[addMode, setAddMode] = useState(false);
  
 const addGoal = goalTitle => {
    
    if(goalTitle.length==0) return;
    setGoal(currentGoals => [...currentGoals, { id: Math.random().toString(), val: goalTitle }]);
    setAddMode(false);
  }

  const deleteGoal = goalId => {
    setGoal(currentGoals =>{
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  } 

  const cancel = () =>{
    setAddMode(false);}
  ;


return(
  
  <View style={styles.container}>
  <GoalInput visible={addMode} onAddGoal={addGoal} onCancel={cancel} />
  <FlatList
    data={goalList}
    keyExtractor={(item, index) => item.id}
    renderItem={itemData => <GoalItem title={itemData.item.val}
      onDelete={deleteGoal}
      id={itemData.item.id}
    />} />
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => setAddMode(true)} 
  />
</View>
);
}
const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
   },
   fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: '#00ffff'
  },

});


// export default home;