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

class Transactions extends Component {
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

    navLogin() {
        this.props.navigator.push({
            id: 'login'
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

    navProfile() {
        this.props.navigator.push({
            id: 'profile'
        })
    }

    navTransactions() {
        this.props.navigator.push({
            id: 'transactions'
        })
    }

    navData() {
        this.props.navigator.push({
            id: 'data'
        })
    }

    navAddons() {
        this.props.navigator.push({
            id: 'addons'
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
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navProfile.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/icons/profile.png')}
                            />
                        <Text
                            style={styles.navigatorText}>My Profile</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navTransactions.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/icons/graph.png')}
                            />
                        <Text
                            style={styles.navigatorText}>My Transactions</Text></View>
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
                <TouchableHighlight style={styles.navigatorItem} onPress={this.navLogin.bind(this)}>
                    <View style={styles.navigatorItem}>
                        <Image
                            style={styles.navigatorIcon}
                            source={require('./resources/icons/logout.png')}
                            />
                        <Text
                            style={styles.navigatorText}>Log Out</Text></View>
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
                    <Text style={styles.heading}>My Transactions</Text>
                </View>

                <Tabs style={styles.navBar}>
                    <TouchableHighlight style={styles.navBarButtons} onPress={this.navBalance.bind(this)}
                                        underlayColor='rgba(0, 0, 0, 0.5)'><View><Image
                        style={styles.navBarIcons}
                        source={require('./resources/icons/dollar.png')}
                        /><Text style={styles.navText}>Balance</Text></View></TouchableHighlight>
                    <TouchableHighlight style={styles.navBarButtons} onPress={this.navTopUp.bind(this)}
                                        underlayColor='rgba(0, 0, 0, 0.5)'><View><Image
                        style={styles.navBarIcons}
                        source={require('./resources/icons/topupaccount.png')}
                        /><Text style={styles.navText}>Top-Up</Text></View></TouchableHighlight>
                    <TouchableHighlight style={styles.navBarButtons} onPress={this.navData.bind(this)}
                                        underlayColor='rgba(0, 0, 0, 0.5)'><View><Image
                        style={styles.navBarIcons}
                        source={require('./resources/icons/data.png')}
                        /><Text style={styles.navText}>Data</Text></View></TouchableHighlight>
                    <TouchableHighlight style={styles.navBarButtons} onPress={this.navAddons.bind(this)}
                                        underlayColor='rgba(0, 0, 0, 0.5)'><View><Image
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
        width: 150,
        height: 20,
        alignSelf: 'center',
        color: '#fff',
        marginLeft: 15,
        marginTop: 5
    },
    navBar: {
        backgroundColor: '#2c2a2a'
    },
    navText: {
        fontSize: 13,
        textAlign: 'center',
        color: '#fff',
    },
    navBarIcons: {
        width: 17,
        height: 17,
        alignSelf: 'center'
    },
    navBarButtons: {
        padding: 14,
        width: 90,
        height: 60,
        flexDirection: 'column',
    }


});

module.exports = Transactions;