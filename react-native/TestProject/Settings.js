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
    ListView
} from 'react-native';


var _navigator; // we fill this up upon on first navigation.

class Settings extends Component {

    navTopUp() {
        this.props.navigator.push({
            id: 'topup'
        })
    }

    navLocateUs() {
        this.props.navigator.push({
            id: 'locateus'
        })
    }

    navBalance() {
        this.props.navigator.push({
            id: 'balance'
        })
    }

    navPromotions() {
        this.props.navigator.push({
            id: 'promotions'
        })
    }

    navSettings() {
        this.props.navigator.push({
            id: 'settings'
        })
    }

    openDrawer() {
        this.refs['DRAWER'].openDrawer()
    }

    render() {
        var navigationView = (
            <View style={styles.navigationDrawer}>
                <View style={styles.drawerLogoContainer}><Image
                    style={styles.drawerLogoContainer}
                    source={require('./resources/images/drawerbackground.jpg')}
                    ><Image
                    style={styles.drawerLogoImage}
                    source={require('./resources/images/logo.png')}
                    /></Image></View>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navBalance.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/images/drawerbackground.jpg')}
                            />
                        <Text
                            style={styles.navigatorText}>Balance</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navTopUp.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/images/drawerbackground.jpg')}
                            />
                        <Text
                            style={styles.navigatorText}>Top-Up</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navPromotions.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/images/drawerbackground.jpg')}
                            />
                        <Text
                            style={styles.navigatorText}>Promotions</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navLocateUs.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/images/drawerbackground.jpg')}
                            />
                        <Text
                            style={styles.navigatorText}>Locate Us</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navSettings.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/images/drawerbackground.jpg')}
                            />
                        <Text
                            style={styles.navigatorText}>Settings</Text></View>
                </TouchableHighlight>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={240}
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
                    <Text style={styles.heading}>Top Up</Text>
                </View>
                <View style={styles.topUpContainer}>
                    <View style={styles.bannerContainer}><Image
                        style={styles.banner}
                        source={require('./resources/images/logo.png')}
                        /></View>
                    <View style={styles.instructionsContainer}><Text style={styles.instructionsText}>Simply follow the
                        below steps to Top-Up your card</Text></View>
                    <ScrollView>
                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 10</Text>
                                <Text style={styles.topUpBonusPlaceholderText}>Bonus ($ 0.50)</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 15</Text>
                                <Text style={styles.topUpBonusPlaceholderText}></Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 17</Text>
                                <Text style={styles.topUpBonusPlaceholderText}>Bonus ($ 2.50)</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 18</Text>
                                <Text style={styles.topUpBonusPlaceholderText}></Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 23</Text>
                                <Text style={styles.topUpBonusPlaceholderText}>Bonus ($ 3)</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 28</Text>
                                <Text style={styles.topUpBonusPlaceholderText}></Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 30</Text>
                                <Text style={styles.topUpBonusPlaceholderText}>Bonus ($ 5)</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 48</Text>
                                <Text style={styles.topUpBonusPlaceholderText}>Bonus ($ 12)</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Text style={styles.topUpPlaceholderText}>$ 88</Text>
                                <Text style={styles.topUpBonusPlaceholderText}>Bonus ($ 22)</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
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
    navigationDrawer: {
        flex: 1,
        backgroundColor: '#23140D'
    },
    drawerLogoContainer: {
        width: 240,
        height: 170,
    },
    drawerLogoImage: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        marginTop: 22
    },
    navigatorItem: {
        width: 130,
        height: 50,
        flexDirection: 'row',
        paddingLeft: 15
    },
    navigatorIcon: {
        width: 10,
        height: 15,
        alignSelf: 'center',
        marginTop: 5
    },
    navigatorText: {
        width: 50,
        height: 15,
        alignSelf: 'center',
        color: '#fff',
        marginLeft: 15
    },
    banner: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        margin: 20
    },
    topUpContainer: {
        backgroundColor: '#EEEFEA',
        flexDirection: 'column',
        height: Dimensions.get('window').height / 100 * 90,
        width: Dimensions.get('window').width,
        alignSelf: 'center'
    },
    bannerContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 30,
        backgroundColor: '#ffdd20'
    },
    instructionsContainer: {
        width: Dimensions.get('window').width,

    },
    instructionsText: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 12,
        marginBottom: 12,
        fontSize: 14,
        textAlign: 'left',
        color: '#A7A8A3',
    },
    topUpPlaceholderContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
        flexDirection: 'row',
    },
    topUpPlaceholderText: {
        width: Dimensions.get('window').width / 100 * 25,
        marginLeft: 40,
        marginTop: 15,
        fontSize: 14,
        textAlign: 'left',
        color: '#898989',
        fontWeight: 'bold'
    },
    topUpBonusPlaceholderText: {
        width: Dimensions.get('window').width / 100 * 45,
        marginLeft: 20,
        marginTop: 18,
        fontSize: 11,
        textAlign: 'left',
        color: '#898989',
    },
    topUpButton: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderColor: '#DCDCDA',
        flexDirection: 'row',
    },
    arrowImage: {
        width: 15,
        height: 15,
        marginBottom: 16,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    typeChangeButtonText: {
        fontSize: 12,
        color: '#656d73',
    },


});

module.exports = Settings;