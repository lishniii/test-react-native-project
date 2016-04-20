/**
 * Created by lishni on 4/4/16.
 */
import React, {
    AppRegistry,
    StyleSheet,
    Component,
    ToolbarAndroid,
    Text,
    View,
    BackAndroid,
    TouchableHighlight,
    Dimensions,
    TextInput,
    Image,
    DrawerLayoutAndroid,
    ScrollView,
} from 'react-native';

var Modal = require('react-native-modalbox');
var _navigator;

class Third extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        };
    }

    openModalChangeType() {
        this.refs['modalChangeType'].open()
    }

    openModalChangeLocation() {
        this.refs['modalChangeLocation'].open()
    }

    toggleDisable() {
        this.setState({isDisabled: !this.state.isDisabled})
    }

    toggleSwipeToClose() {
        this.setState({swipeToClose: !this.state.swipeToClose})
    }

    navSecond() {
        this.props.navigator.push({
            id: 'second'
        })
    }

    navThird() {
        this.props.navigator.push({
            id: 'third'
        })
    }

    navFourth() {
        this.props.navigator.push({
            id: 'fourth'
        })
    }

    openDrawer() {
        this.refs['DRAWER'].openDrawer()
    }

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <TouchableHighlight onPress={this.navSecond.bind(this)}><Text
                    style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Second</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navThird.bind(this)}><Text
                    style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Third</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navFourth.bind(this)}><Text
                    style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Fourth</Text>
                </TouchableHighlight>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref={'DRAWER'}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>

                <View style={styles.toolBar}>
                    <View style={styles.toolBarItemContainer}>
                        <TouchableHighlight onPress={this.openDrawer.bind(this)}>
                            <Image
                                style={{width: 25, height: 25,}}
                                source={require('./resources/icons/menu.png')}
                                />
                        </TouchableHighlight>
                    </View>
                    <Text style={styles.heading}>Locate us</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.mapContainer}><Image
                        source={require('./resources/images/map.png')}
                        /></View>
                    <ScrollView>
                        <View style={styles.typeContainer}><Text style={styles.typeHeadingText}>Type of
                            Store</Text></View>
                        <View style={styles.typePlaceholderContainer}><Text style={styles.typePlaceholderText}>M1
                            Store</Text><TouchableHighlight style={styles.changeTypeButton}
                                                            onPress={this.openModalChangeType.bind(this)}><Image
                            style={{width: 15, height: 15,}}
                            source={require('./resources/icons/arrow.png')}
                            />
                        </TouchableHighlight></View>
                        <View style={styles.locationContainer}><Text style={styles.locationHeadingText}>Location</Text></View>
                        <View style={styles.locationPlaceholderContainer}><Text style={styles.locationPlaceholderText}>Central</Text><TouchableHighlight
                            style={styles.changeLocationButton} onPress={this.openModalChangeLocation.bind(this)}><Image
                            style={{width: 15, height: 15,}}
                            source={require('./resources/icons/arrow.png')}
                            />
                        </TouchableHighlight></View>

                        <View style={styles.resultsContainer}>
                            <Text style={styles.resultsHeadingText}>Results</Text>
                        </View>
                        <View style={styles.resultsDetailsContainer}>
                            <Image
                                style={styles.locationIcon}
                                source={require('./resources/icons/location.png')}
                                />
                            <Text style={styles.resultsDetailsText}>Causeway Point
                            1, Woodlands Square
                            #03-01 Causeway Point
                            Singapore 738099
                            Nearest MRT Station:
                            Woodlands (NS9)</Text></View>
                        <View style={styles.resultsDetailsContainer}>
                            <Image
                                style={styles.locationIcon}
                                source={require('./resources/icons/location.png')}
                                />
                            <Text style={styles.resultsDetailsText}>Causeway Point
                                1, Woodlands Square
                                #03-01 Causeway Point
                                Singapore 738099
                                Nearest MRT Station:
                                Woodlands (NS9)</Text></View>
                        <View style={styles.resultsDetailsContainer}>
                            <Image
                                style={styles.locationIcon}
                                source={require('./resources/icons/location.png')}
                                />
                            <Text style={styles.resultsDetailsText}>Causeway Point
                                1, Woodlands Square
                                #03-01 Causeway Point
                                Singapore 738099
                                Nearest MRT Station:
                                Woodlands (NS9)</Text></View>
                        <View style={styles.resultsDetailsContainer}>
                            <Image
                                style={styles.locationIcon}
                                source={require('./resources/icons/location.png')}
                                />
                            <Text style={styles.resultsDetailsText}>Causeway Point
                                1, Woodlands Square
                                #03-01 Causeway Point
                                Singapore 738099
                                Nearest MRT Station:
                                Woodlands (NS9)</Text></View>
                        <View style={styles.resultsDetailsContainer}>
                            <Image
                                style={styles.locationIcon}
                                source={require('./resources/icons/location.png')}
                                />
                            <Text style={styles.resultsDetailsText}>Causeway Point
                                1, Woodlands Square
                                #03-01 Causeway Point
                                Singapore 738099
                                Nearest MRT Station:
                                Woodlands (NS9)</Text></View>
                    </ScrollView>
                </View>
                <Modal style={styles.openModalChangeType} position={"center"} ref={'modalChangeType'}
                       isDisabled={this.state.isDisabled}>
                    <View>
                        <View style={styles.modalHeading}><Text style={styles.modalHeadingText}>Type of
                            Store</Text></View>

                    </View>
                </Modal>
                <Modal style={styles.openModalChangeLocation} position={"center"} ref={'modalChangeLocation'}
                       isDisabled={this.state.isDisabled}>
                    <View>
                        <View style={styles.modalHeading}><Text style={styles.modalHeadingText}>Location</Text></View>

                    </View>
                </Modal>
            </DrawerLayoutAndroid>

        );

    }
}

const styles = StyleSheet.create({

    background: {
        backgroundColor: '#3f4952',
        paddingTop: 20,
        height: Dimensions.get('window').height,
    },
    toolBar: {
        backgroundColor: '#f37124',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20,
        height: Dimensions.get('window').height / 100 * 10,
        width: Dimensions.get('window').width
    },
    toolBarItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        marginLeft: 20,
        fontSize: 19,
        fontFamily: 'sans-serif',
        textAlign: 'left',
        color: '#fff',
    },
    container: {
        backgroundColor: '#d4d5d7',
        flexDirection: 'column',
        height: Dimensions.get('window').height / 100 * 90,
        width: Dimensions.get('window').width,
        alignSelf: 'center'
    },
    mapContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 30,
        backgroundColor: 'green'
    },
    typeContainer: {
        width: Dimensions.get('window').width,
        height: 30
    },
    typeHeadingText: {
        marginLeft: 20,
        marginTop: 11,
        fontSize: 12,
        textAlign: 'left',
        color: '#93999d',
    },
    typePlaceholderContainer: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#bfbdbc',
        flexDirection: 'row',
    },
    typePlaceholderText: {
        width: Dimensions.get('window').width / 100 * 85,
        marginLeft: 20,
        marginTop: 15,
        fontSize: 14,
        textAlign: 'left',
        color: '#898989',
    },
    locationContainer: {
        width: Dimensions.get('window').width,
        height: 30
    },
    locationHeadingText: {
        marginLeft: 20,
        marginTop: 11,
        fontSize: 12,
        textAlign: 'left',
        color: '#93999d',
    },
    locationPlaceholderContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#bfbdbc',
        flexDirection: 'row',
    },
    locationPlaceholderText: {
        width: Dimensions.get('window').width / 100 * 85,
        marginLeft: 20,
        marginTop: 15,
        fontSize: 14,
        textAlign: 'left',
        color: '#898989',
    },
    changeTypeButton: {
        width: 41,
        height: 20,
        marginBottom: 16,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        /*borderBottomWidth: 1,
        borderColor: '#656d73'*/
    },
    changeLocationButton: {
        width: 41,
        height: 20,
        marginBottom: 16,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    typeChangeButtonText: {
        fontSize: 12,
        color: '#656d73',
    },
    locationChangeButtonText: {
        fontSize: 12,
        color: '#656d73',
    },
    locationIcon: {
        marginTop: 20,
        marginLeft: 10,
        width: 20,
        height: 25,
    },
    resultsContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 7,
    },
    resultsHeadingText: {
        marginLeft: 20,
        marginTop: 25,
        fontSize: 12,
        textAlign: 'left',
        color: '#93999d',
    },
    resultsDetailsContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 12,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#bfbdbc',
        flexDirection: 'row',
    },
    resultsDetailsText: {
        width: Dimensions.get('window').width / 100 * 85,
        marginLeft: 10,
        marginTop: 15,
        fontSize: 14,
        textAlign: 'left',
        color: '#898989',
    },
    openModalChangeType: {
        width: Dimensions.get('window').width / 100 * 70,
        height: Dimensions.get('window').height / 100 * 40,
        backgroundColor: '#fbfbfb',
    },
    openModalChangeLocation: {
        width: Dimensions.get('window').width / 100 * 70,
        height: Dimensions.get('window').height / 100 * 50,
        backgroundColor: '#fbfbfb',
    },
    modalHeading: {
        width: Dimensions.get('window').width / 100 * 70,
        height: Dimensions.get('window').height / 100 * 10,
        backgroundColor: '#f37124',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#f37124',
        alignSelf: 'center',
        transform: [
            {rotate: '180deg'}
        ]
    },
    modalHeadingText: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',    }
});

module.exports = Third;
/**
 * Created by lishni on 4/4/16.
 */
