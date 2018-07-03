import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';

export default class NavBar extends Component {
    static navigationOptions = {
        title: 'Navbar'
    }
    render(){
        return(
            <View>
                <Text>NavBar</Text>
            </View>
        )
    }
}