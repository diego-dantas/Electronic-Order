import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

export default class TableHeader extends Component {
    
    
    render(){
        return(
            <View>
                <TextInput
                     placeholder='Responsável'
                     style={{marginHorizontal: 20, marginVertical: 10}}
                /> 
            </View>
        )
    }
}