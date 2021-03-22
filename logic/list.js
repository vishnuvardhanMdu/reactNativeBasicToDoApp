import React, { Component, useState } from 'react';

class ToDoList extends React.Component  {
    constructor() {
        const [goalList, setGoal] = useState([]);
        const [addMode, setAddMode] = useState(false);
    }

    addGoal = goalTitle => {
        if (goalTitle.length == 0) return;
        setGoal(currentGoals => [...currentGoals, { id: Math.random().toString(), val: goalTitle }]);
        setAddMode(false);
    }
    
    deleteGoal = goalId => {
        setGoal(currentGoals =>{
          return currentGoals.filter((goal) => goal.id !== goalId);
        });
      } 
    
    cancel = () =>{
        setAddMode(false);}
      ;
    
    

}