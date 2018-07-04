import React, { Component } from 'react';
import { View } from 'react-native';
import {Scene, Router} from 'react-native-router-flux';


//inport of components
import LoginScreen from './src/login/Login';
import TableHallScreen from './src/table_hall/TableHall'
import TableDetailsScreen from './src/table_hall/table/TableDetails'

export default class App extends Component {
  
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
      
       <Router sceneStyle={{paddingTop: 60}}>
          <Scene key='login'              component={LoginScreen}/>
          <Scene key='tableHallScreen'    component={TableHallScreen} title='São de Mesas'/>
          <Scene key='tableDetailsScreen' component={TableDetailsScreen} initil/>
       </Router>
      </View>
    );
  }
}
