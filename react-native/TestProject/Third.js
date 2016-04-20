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
} from 'react-native';

var _navigator;

class Third extends Component {
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
                    <View collapsable={true}>
                        <View style={styles.typeContainer}><Text style={styles.typePlaceholderText}>TYPE OF TEXT</Text></View>
                        <View style={styles.typePlaceholderContainer}></View>
                        <View style={styles.locationContainer}><Text style={styles.locationPlaceholderText}>LOCATION</Text></View>
                        <View style={styles.locationPlaceholderContainer}></View>

                        <View style={styles.resultsContainer}>
                        </View>
                    </View>
                </View>
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
        height: Dimensions.get('window').height / 100 * 7,
    },
    typePlaceholderText: {
        marginLeft: 20,
        marginTop: 25,
        fontSize: 10,
        textAlign: 'left',
        color: '#93999d',
    },
    typePlaceholderContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
        backgroundColor: '#e6e7e9',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d2d2d2'
    },
    locationContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 7,
    },
    locationPlaceholderText: {
        marginLeft: 20,
        marginTop: 25,
        fontSize: 10,
        textAlign: 'left',
        color: '#93999d',
    },
    locationPlaceholderContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
        backgroundColor: '#e6e7e9',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d2d2d2'
    },
    resultsContainer: {},

});

module.exports = Third;
/**
 * Created by lishni on 4/4/16.
 */
