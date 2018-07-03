import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Table extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            mesa: props.mesa,
            color: props.color,
        }
    }
    
    render(){
        return(
            <View>
                <TouchableOpacity
                    onPress={() => {Actions.tableDetailsScreen();}}
                    style={{marginBottom: 20, backgroundColor: this.state.color, width: 150, height: 150}}
                    //onPress={() => alert('to aqui')}
                 >
                    <Text
                        style={{color: '#fff', alignSelf: 'center', fontSize: 35, paddingVertical: 50}}
                    > 
                       { this.state.mesa } 
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}