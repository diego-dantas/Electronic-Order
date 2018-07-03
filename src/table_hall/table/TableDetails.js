import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

import Table from './Table'
export default class TableDetails extends Component {
    
    render(){
        return(
            <View>
                 <Table mesa='Mesa 3' color='red'/>
                    <Table mesa='Mesa 4' color='green'/>
            </View>
        )
    }
}