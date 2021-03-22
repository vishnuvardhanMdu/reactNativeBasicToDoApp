import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';


const GoalItem = props => {
    return (

        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.displayGoalList}  >
                <RadioButton status="checked"  color="#4d4dff" />
                <Text style={styles.listLabel} >{props.title}</Text>
                {/* <Icon name="delete" style={{alignContent:"flex-end"}} size={26} /> */}
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    displayGoalList: {
        padding: 10,
        backgroundColor: '#ccccff',
        borderColor: '#8080ff',
        borderWidth: 1,
        marginVertical: 4,
        flexDirection: 'row',
        borderRadius:1,
        marginBottom: 8,
    },
    listLabel:{
        fontSize:21,
        color:'black',
        fontWeight: 'bold',
        textDecorationLine: 'line-through',

    },
    btn:{
        alignContent:"space-between",
      
    },
});

export default GoalItem;