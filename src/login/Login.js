import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput, TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    constructor(props){
        super(props);
    }

  login = () => {
    alert('to aqui 2');
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text
          style={{textAlign: 'center'}}
        >
          Login
        </Text>
        <TextInput
          placeholder='Usuário'
          style={{marginHorizontal: 20, marginVertical: 10}}
        />
        <TextInput
          placeholder='Senha'
          secureTextEntry={true}
          style={{marginHorizontal: 20, marginVertical: 10}}
        />
        <TouchableOpacity
           onPress={() => {Actions.tableHallScreen();}}
          
            style={{marginHorizontal: 20, backgroundColor: 'blue', padding: 10}}
        >
          <Text
            style={{color: '#fff', alignSelf: 'center', fontSize: 20}}
          > Entrar </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
