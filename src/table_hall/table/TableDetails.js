import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Button, Text,  Icon, Item, Input, Accordion, ListItem, Left, Body, Right, Switch} from 'native-base';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ]; 
export default class TableDetails extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            mesa: props.mesa,
        }
    }
    render(){
        return(
            <View 
                style={{    
                    flex: 1
                }}
            >
                 <Text 
                    style={{
                        fontSize: 30,
                        marginTop: 10,
                        alignSelf: 'center',
                    }}>
                     { this.state.mesa}
                 </Text>
                 <Button 
                    block rounded success
                    style={{margin: 20, padding: 10}}
                    >
                    <Text>Adicionar</Text>
                    <Icon type="FontAwesome" name="plus-circle" />
                </Button>
                <ListItem icon>
                    <Body>
                        <Text>Airplane Mode</Text>
                    </Body>
                    <Right>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="plane" />
                        </Button>
                    </Right>
                    <Right>
                        <Button style={{ backgroundColor: "red" }}>
                            <Icon type="MaterialCommunityIcons" active name="delete-circle" size={30}/>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Body>
                        <Text>Airplane Mode</Text>
                    </Body>
                    <Right>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="plane" />
                        </Button>
                    </Right>
                    <Right>
                        <Button style={{ backgroundColor: "red" }}>
                            <Icon type="MaterialCommunityIcons" active name="delete-circle" size={30}/>
                        </Button>
                    </Right>
                </ListItem>
            </View>
        )
    }
}