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
                    onPress={() => {Actions.tableDetailsScreen({mesa: this.state.mesa});}}
                    style={{marginBottom: 20, backgroundColor: this.state.color, width: 125, height: 125}}
                    //onPress={() => alert('to aqui')}
                 >
                    <Text
                        style={{color: '#fff', alignSelf: 'center', fontSize: 25, paddingVertical: 50}}
                    > 
                       { this.state.mesa } 
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}