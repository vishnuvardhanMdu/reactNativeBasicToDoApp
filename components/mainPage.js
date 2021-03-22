import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import activeTasks from './activeTasks';
import home from './home';
import page1 from './page1';

const Tab = createMaterialBottomTabNavigator();
const mainPage = ({ navigation }) => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor='#ffffff'
  // barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="page1"
      component={page1}
      options={{
        tabBarLabel: 'To Do',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="check" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="check"
      component={home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Activetasks"
      component={activeTasks}
      options={{
        tabBarLabel: 'Done',
        tabBarIcon: ({ color }) => (
          <Icon name="list" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);


export default mainPage;



{/* */ }