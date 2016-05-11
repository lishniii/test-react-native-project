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
import { AnimatedCircularProgress } from 'react-native-circular-progress';
var Tabs = require('react-native-tabs');
const MAX_POINTS = 100;
var _navigator; // we fill this up upon on first navigation.

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMoving: false,
            pointsDelta: 10,
            iddPoints: 50,
            dataPoints: 85,
            smsPoints: 20,
            totalBalance: 84,
            page:'second'
        };
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

    render() {
        var self = this;
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

        const idd = this.state.iddPoints / MAX_POINTS * 100;
        const data = this.state.dataPoints / MAX_POINTS * 100;
        const sms = this.state.smsPoints / MAX_POINTS * 100;
        const balanceChartSize = Dimensions.get('window').height / 100 * 15;

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
                    <Text style={styles.heading}>Balance</Text>
                </View>
            <ScrollView>
                <View style={styles.accountBalanceContainer}>
                    <View style={styles.bannerContainer}><Text style={styles.totalBalanceAmountText}>$ 84.50</Text><Text
                        style={styles.totalBalanceExpiaryDateText}>Expiry Date 08/06/2016</Text><Text
                        style={styles.totalBalanceText}>Available Balance</Text></View>

                    <View style={styles.balanceContainer}>

                        <AnimatedCircularProgress
                            rotation={0}
                            size={90}
                            width={14}
                            fill={idd}
                            tintColor="#09a2b2"
                            backgroundColor="#89cdd4">
                            {
                                (fill) => (
                                    <Text style={styles.points}>IDD {'\n'}
                                        { Math.round(MAX_POINTS * fill / 100) } Mins
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={styles.BalanceText}>14 Days {'\n'} Remaining </Text>
                    </View>

                    <View style={styles.balanceContainer}>

                        <AnimatedCircularProgress
                            rotation={0}
                            size={90}
                            width={14}
                            fill={data}
                            tintColor="#e67e22"
                            backgroundColor="#f2c1a2">
                            {
                                (fill) => (
                                    <Text style={styles.points}>DATA {'\n'}
                                        { Math.round(MAX_POINTS * fill / 100) } MB
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={styles.BalanceText}>2 Days {'\n'} Remaining </Text>
                    </View>

                    <View style={styles.balanceContainer}>

                        <AnimatedCircularProgress
                            rotation={0}
                            size={90}
                            width={14}
                            fill={sms}
                            tintColor="#09a2b2"
                            backgroundColor="#89cdd4">
                            {
                                (fill) => (
                                    <Text style={styles.points}>FREE {'\n'}
                                        { Math.round(MAX_POINTS * fill / 100) } SMS
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={styles.BalanceText}>22 Days {'\n'} Remaining </Text>
                    </View>
                </View>
            </ScrollView>
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
    banner: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        margin: 20
    },
    accountBalanceContainer: {
        backgroundColor: '#EEEFEA',
        flexDirection: 'column',
        height: Dimensions.get('window').height / 100 * 90,
        width: Dimensions.get('window').width,
        alignSelf: 'center'
    },
    bannerContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 30,
        backgroundColor: '#EEEFEA',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 20
    },
    totalBalanceAmountText: {
        fontSize: 50,
        fontFamily: 'sans-serif',
        textAlign: 'left',
        color: '#f37124',

        alignSelf: 'center',
        justifyContent: 'center',
    },
    totalBalanceExpiaryDateText: {
        fontSize: 12,
        fontFamily: 'sans-serif',
        textAlign: 'left',
        color: '#B6B2B2',

        alignSelf: 'center',
        justifyContent: 'center',
    },
    totalBalanceText: {
        fontSize: 14,
        fontFamily: 'sans-serif',
        textAlign: 'left',
        color: '#B6B2B2',
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    BalanceText: {
        width: 200,

        fontSize: 17,
        textAlign: 'center',
        color: '#898989',
        fontWeight: 'bold'
    },
    balanceContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 18,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderColor: '#DCDCDA',
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    /*  chart: {
     rotation: 0,
     size: 85,
     width: 14,
     fill: 'fill',
     tintColor: '#e67e22',
     backgroundColor: '#CCC',
     },*/
    points: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: 45,
        top: 27,
        left: 22,
        textAlign: 'center',
        color: '#999',
        fontSize: 12,
        fontWeight: "400"
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

module.exports = Balance;