/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Card, CardItem, Drawer } from 'native-base';
import SideBar from './index_drawer'
import data from './json/data.json'

var Sound = require('react-native-sound');

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d723',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d724',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d725',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d726',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d727',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d728',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d729',
        title: 'Third Item',
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29d720',
        title: 'Third Item',
    },
];


export default class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isPlay: false,

            index: data[0].index,
            word_en: data[0].word_en,
            word_arb:  data[0].word_arb,
            word_bn:  data[0].word_bn,
        }
    }


    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };




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


    setData = (e) => {
        this.setState({
            word_en: e.word_en,
            word_arb: e.word_arb,
            word_bn: e.word_bn,
        })
    }


    render() {

        console.log("json Data", data)

        return (
            <Fragment>

                <Drawer 
                    ref={(ref) => { this.drawer = ref; }} 
                    content={<SideBar />} 
                    onClose={() => this.closeDrawer()} > 

                    <Header style={{ backgroundColor: '#2d3844' }}>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
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
                                <Text>{this.state.word_en}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                        {this.state.word_bn}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text> {this.state.word_arb} </Text>
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
                                data={data}
                                renderItem={({ item }) =>
                                    <View style={styles.item}>
                                        <Button transparent onPress={() => this.setData(item)}>
                                    
                                            <Text style={styles.title}>{item.word_en}</Text>
                                        </Button>
                                    </View>
                                    
                                }
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </Container>
                </Drawer>
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