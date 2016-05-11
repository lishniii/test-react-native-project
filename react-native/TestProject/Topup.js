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

var Tabs = require('react-native-tabs');

var _navigator; // we fill this up upon on first navigation.

class Topup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            optionSelected: 1,
            renderView: 1
        }
    }

    onSelect(index) {
        this.setState({
            optionSelected: index + 1
        });
    }

    setRenderState(value) {
        this.setState({
            renderView: value
        });
    }

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

    renderView() {
        if (this.state.renderView == 1) {
            return (
                <View style={styles.topUpContainer}>
                    <ScrollView>
                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Image style={styles.topUpPlaceholderImage}
                                       source={require('./resources/images/5topupcard.png')}/>
                                <Text style={styles.topUpBonusPlaceholderText}>&middot; 15 SMS free {'\n'}&middot; valid
                                    for 60 days</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Image style={styles.topUpPlaceholderImage}
                                       source={require('./resources/images/18topupcard.png')}/>
                                <Text style={styles.topUpBonusPlaceholderText}>&middot; Bonus $3 (valid 30
                                    days) {'\n'}&middot; Free Incoming Calls (20 days){'\n'}&middot; valid for 180
                                    days </Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={styles.topUpContainer}>
                    <ScrollView>
                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Image style={styles.topUpPlaceholderImage}
                                       source={require('./resources/images/15topupcard.png')}/>
                                <Text style={styles.topUpBonusPlaceholderText}>&middot; Bundled Local Data 2 GB {'\n'}&middot; $100 of Local calls/SMS{'\n'}&middot; valid for 30 days</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Image style={styles.topUpPlaceholderImage}
                                       source={require('./resources/images/17topupcard.png')}/>
                                <Text style={styles.topUpBonusPlaceholderText}>&middot; Bundled Local Data 350 MB{'\n'}&middot; $18 local outgoing calls +
                                    500 SMS{'\n'}&middot; valid for 30 days</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Image style={styles.topUpPlaceholderImage}
                                       source={require('./resources/images/23topupcard.png')}/>
                                <Text style={styles.topUpBonusPlaceholderText}>&middot; Bundled Local Data 2 GB {'\n'}&middot; $100 of Local calls/SMS{'\n'}&middot; valid for 30 days</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Image style={styles.topUpPlaceholderImage}
                                       source={require('./resources/images/28topupcard.png')}/>
                                <Text style={styles.topUpBonusPlaceholderText}>&middot; Bundled Local Data 350 MB{'\n'}&middot; $18 local outgoing calls +
                                    500 SMS{'\n'}&middot; valid for 30 days</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.topUpButton}

                                            underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.topUpPlaceholderContainer}>
                                <Image style={styles.topUpPlaceholderImage}
                                       source={require('./resources/images/30topupcard.png')}/>
                                <Text style={styles.topUpBonusPlaceholderText}>&middot; Bundled Local Data 350 MB{'\n'}&middot; $18 local outgoing calls +
                                    500 SMS{'\n'}&middot; valid for 30 days</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                    </ScrollView>
                </View>
            )
        }
    }

    render() {
        var buttonOneColor = '#f37022';
        var buttonTwoColor = '#d4d5d7';

        if (this.state.renderView == 1) {
            buttonOneColor = '#f37022';
            buttonTwoColor = '#d4d5d7';

        } else {
            buttonOneColor = '#d4d5d7';
            buttonTwoColor = '#f37022';
        }

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
                            source={require('./resources/icons/dollar.png')}
                            />
                        <Text
                            style={styles.navigatorText}>Balance</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navTopUp.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/icons/topupaccount.png')}
                            />
                        <Text
                            style={styles.navigatorText}>Top-Up</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navPromotions.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/icons/pricetag.png')}
                            />
                        <Text
                            style={styles.navigatorText}>Promotions</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navLocateUs.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/icons/pin.png')}
                            />
                        <Text
                            style={styles.navigatorText}>Locate Us</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navSettings.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/icons/settings.png')}
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
                <View style={styles.accountTab}>
                    <TouchableHighlight style={[styles.accountContainer, {borderBottomColor: buttonOneColor}]}
                                        onPress={this.setRenderState.bind(this, 1)} underlayColor='rgba(0, 0, 0, 0.1)'>

                        <Text style={styles.accountHeadingText}>Main Account
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.accountContainer, {borderBottomColor: buttonTwoColor}]}
                                        onPress={this.setRenderState.bind(this, 2)} underlayColor='rgba(0, 0, 0, 0.1)'>

                        <Text style={styles.accountHeadingText}>Bonus Account
                        </Text>
                    </TouchableHighlight>
                </View>
                {this.renderView()}
                <Tabs style={styles.navBar}>
                    <TouchableHighlight style={styles.navBarButtons} onPress={this.navBalance.bind(this)} underlayColor='rgba(0, 0, 0, 0.5)'><View><Image
                        style={styles.navBarIcons}
                        source={require('./resources/icons/dollar.png')}
                        /><Text style={styles.navText}>Balance</Text></View></TouchableHighlight>
                    <TouchableHighlight style={styles.navBarButtons} onPress={this.navTopUp.bind(this)} underlayColor='rgba(0, 0, 0, 0.5)'><View><Image
                        style={styles.navBarIcons}
                        source={require('./resources/icons/topupaccount.png')}
                        /><Text style={styles.navText}>Top-Up</Text></View></TouchableHighlight>
                    <TouchableHighlight style={styles.navBarButtons} onPress={this.navBalance.bind(this)} underlayColor='rgba(0, 0, 0, 0.5)'><View><Image
                        style={styles.navBarIcons}
                        source={require('./resources/icons/data.png')}
                        /><Text style={styles.navText}>Data</Text></View></TouchableHighlight>
                    <TouchableHighlight style={styles.navBarButtons} onPress={this.navBalance.bind(this)} underlayColor='rgba(0, 0, 0, 0.5)'><View><Image
                        style={styles.navBarIcons}
                        source={require('./resources/icons/addon.png')}
                        /><Text style={styles.navText}>Add-ons</Text></View></TouchableHighlight>
                </Tabs>
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
        backgroundColor: '#292727'
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
        width: 240,
        height: 50,
        flexDirection: 'row',
        paddingLeft: 15
    },
    navigatorIcon: {
        width: 18,
        height: 18,
        alignSelf: 'center',
        marginTop: 5
    },
    navigatorText: {
        width: 100,
        height: 20,
        alignSelf: 'center',
        color: '#fff',
        marginLeft: 15,
        marginTop: 5
    },
    accountTab: {
        backgroundColor: '#EEEFEA',
        flexDirection: 'row',
        height: Dimensions.get('window').height / 100 * 8,
        width: Dimensions.get('window').width
    },
    accountContainer: {
        height: Dimensions.get('window').height / 100 * 8,
        width: Dimensions.get('window').width / 100 * 50,
        borderBottomWidth: 2,
        alignItems: 'center'
    },
    accountHeadingText: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 14,
        marginBottom: 14,
        fontSize: 14,
        textAlign: 'center',
        color: '#A7A8A3',
    },
    topUpContainer: {
        backgroundColor: '#EEEFEA',
        flexDirection: 'column',
        height: Dimensions.get('window').height / 100 * 90,
        width: Dimensions.get('window').width,
        alignSelf: 'center'
    },
    topUpButton: {
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderColor: '#DCDCDA',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    topUpPlaceholderContainer: {
        width: Dimensions.get('window').width,
        height: 300,
        flexDirection: 'row',
    },
    topUpPlaceholderImage: {
        width: 100,
        height: 60,
        margin: 20,
    },
    topUpBonusPlaceholderText: {
        width: 200,
        height: 60,
        margin: 20,
        fontSize: 11,
        textAlign: 'left',
        color: '#898989',
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
    navBar: {
        backgroundColor:'#2c2a2a'
    },
    navText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
    },
    navBarIcons: {
        width: 18,
        height: 18,
        alignSelf: 'center'
    },
    navBarButtons: {
        padding:12,
        width: 90,
        height: 60,
        flexDirection: 'column',
    }


});

module.exports = Topup;