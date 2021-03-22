
import React, { useState, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import activeTasks from './components/activeTasks';
import page1 from './components/page1';
import mainPage from './components/mainPage';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reactive ToDos" style= {{backgroundColor: 'red'}} component={mainPage} />
        <Stack.Screen name="Page1" component={page1} />
        <Stack.Screen name="AddGoals" component={activeTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
