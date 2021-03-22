import React, { useState }  from 'react';
import { Button, TextInput, StyleSheet, View, Modal } from 'react-native';

const GoalInput = props => {
    const [goal, goalLists] = useState('');
    const getGoal = (goal) => {
      goalLists(goal);
    };
  
    const onAddGoalFunction = () =>{
        props.onAddGoal(goal);
        goalLists('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.form}>
                <TextInput placeholder="Enter goals"
                    style={styles.input}
                    onChangeText={getGoal}
                    value={goal}
                />
                <View style={styles.buttonSet}>
                    <View style={styles.buttonStyle}>
                        <Button title="ADD" color="green" onPress={onAddGoalFunction} />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderBottomColor: 'black',
        padding: 5,
        borderWidth: 1,
        marginBottom:12,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonSet:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'60%'

    },
    buttonStyle:{
        width:'40%'
    },

});

export default GoalInput;