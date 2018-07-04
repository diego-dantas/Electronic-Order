import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight, Text, Modal, FlatList } from 'react-native';

import Table from './table/Table';
export default class TableHall extends Component {
    
    constructor(){
        super();
        this.state = {
            modalVisible: false,
        };
        
    }

    render(){
        return(
            <ScrollView>
                <View 
                    style={{
                        flex: 1, 
                        flexDirection: 'row', 
                        flexWrap: 'wrap',
                        justifyContent: 'space-around'
                    }}
                >
                    
                    <Table mesa='Mesa 1' color='green'/>
                    <Table mesa='Mesa 2' color='green'/>
                    <Table mesa='Mesa 3' color='red'/>
                    <Table mesa='Mesa 4' color='green'/>
                    <Table mesa='Mesa 5' color='green'/>
                    <Table mesa='Mesa 6' color='red'/>
                    <Table mesa='Mesa 7' color='red'/>
                    <Table mesa='Mesa 8' color='green'/>
                    <Table mesa='Mesa 9' color='green'/>
                    <Table mesa='Mesa 10' color='green' />
                    <Table mesa='Mesa 11' color='green' />
                    <Table mesa='Mesa 12' color='red' />
                    
                </View>
            </ScrollView>
        )
    }
}