/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Card, CardItem } from 'native-base';
var Sound = require('react-native-sound');

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];


export default class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isPlay: false,
        }
    }

    player = ( event ) => {
        
        const sound = new Sound('audio.mp3', Sound.MAIN_BUNDLE, (error) => {
            
            if (error) {
                this.setState({isPlay: false}, () => {
                    alert('Auto Play Problem')
                })
            } else {
                if(event === 'pause'){
                    this.setState({isPlay: false}, () => {
                        global.sound.stop(() => { alert('worked')})
                    })
                } 
                if(event === 'play'){
                    this.setState({isPlay: true}, () => {
                        global.sound = sound;

                        // play when loaded
                        sound.play();
                    })
                }
            }
        });
    }


    render() {
        return (
            <Fragment>

                <Header style={{ backgroundColor: '#2d3844' }}>
                    <Left>
                        <Button transparent onLongPress={(e) => alert('Hello')}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title >Rabbana</Title>
                    </Body>
                    <Right />
                </Header>

                <Container >
                    <Card transparent style={{ backgroundColor: '#d0d6dc' }}>
                        <CardItem header >
                            <Text>List Of work</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    adasdjnsadsajd
                                    asdjkasnkdjsad
                                    jasdsd
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>

                    <View style={{marginTop: 10, backgroundColor: '#8e97a1'}}></View>

                    <Card transparent style={{marginTop: 10}}>
                        <CardItem>
                            <Body>
                               
                                    { this.state.isPlay ? 
                                        <Button transparent onPress={() => this.player('pause')}>
                                            <Icon name='pause'/>
                                        </Button>
                                      :
                                        <Button transparent onPress={() => this.player('play')}>
                                            <Icon name='play'/>
                                        </Button>
                                    }
                            </Body>
                        </CardItem>
                    </Card>

                    <View style={styles.container}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) =>
                                <View style={styles.item}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                </Container>
            </Fragment>
        );
    }
};




const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8e97a1',
        flex: 1,
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
    },
});