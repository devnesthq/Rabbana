import React, { Fragment, Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet  } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Card, CardItem } from 'native-base';


export default class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <Container style={{ backgroundColor: '#d0d6dc' }}>
                <Card transparent style={{ backgroundColor: '#d0d6dc' }}>
                    <CardItem header >
                        <Text>Rabbana</Text>
                    </CardItem>
                </Card>


                <Card transparent style={{ backgroundColor: '#d0d6dc' }}>
                    <CardItem>
                        <Text>Choose Color</Text>
                    </CardItem>

                    <CardItem>
                        <Left style={{backgroundColor: 'red',  margin: 5}}>
                            <Button transparent onPress={() => alert('Red Selected')}>
                                <Text style={{color: 'white', alignContent: 'center'}}>Red</Text>
                            </Button>
                            
                        </Left>
                        <Body style={{backgroundColor: 'green', margin: 5}}>
                            <Button transparent onPress={() => alert('Green Selected')}>
                                <Text style={{color: 'white', alignContent: 'center'}}>Green</Text>
                            </Button>
                        </Body>
                        <Right style={{backgroundColor: 'blue',  margin: 5}}>
                            <Button transparent onPress={() => alert('Blue Selected')}>
                                <Text style={{color: 'white', alignContent: 'center'}}>Blue</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            </Container>
        )
    }
}