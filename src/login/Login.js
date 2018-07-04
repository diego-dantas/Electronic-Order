import React, { Component } from 'react';
import {
  View,
  TextInput, TouchableOpacity
} from 'react-native';
import { Container, Button, Text,  Icon, Item, Input} from 'native-base';



import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <Container
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
         <Text
          style={{textAlign: 'center'}}
        >
          Login
        </Text>
        <View  style={{marginHorizontal: 30}}>
          <Item>
            <Icon active type="FontAwesome" name='user' />
            <Input placeholder='Usuario'/>
          </Item>
          <Item>
            <Icon active type="FontAwesome" name='key' />
            <Input placeholder='Senha'/>
          </Item>
        </View>
        <Button 
          block rounded
          style={{margin: 20, padding: 10}}
          onPress={() => {Actions.tableHallScreen();}}
        >
          <Text>Login</Text>
          <Icon type="FontAwesome" name="sign-in" />
        </Button>
        
      </Container>
    );
  }
}
