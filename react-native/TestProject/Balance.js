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
const MAX_POINTS = 100;
var _navigator; // we fill this up upon on first navigation.

class Balance extends Component {
    constructor() {
        super();
        this.state = {
            isMoving: false,
            pointsDelta: 10,
            iddPoints: 50,
            dataPoints: 85,
            smsPoints: 20
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
                <View style={styles.topUpContainer}>
                   <Image
                        style={styles.bannerContainer}
                        source={require('./resources/images/drawerbackground.jpg')}>
                   </Image>


                        <View style={styles.balanceContainer}>

                                <AnimatedCircularProgress
                                    rotation={0}
                                    size={85}
                                    width={14}
                                    fill={idd}
                                    tintColor="#e67e22"
                                    backgroundColor="#CCC">
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
                            size={85}
                            width={14}
                            fill={data}
                            tintColor="#e67e22"
                            backgroundColor="#CCC">
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
                            size={85}
                            width={14}
                            fill={sms}
                            tintColor="#e67e22"
                            backgroundColor="#CCC">
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
    BalanceText: {
        width: 200,

        fontSize: 17,
        textAlign: 'center',
        color: '#898989',
        fontWeight: 'bold'
    },
    topUpBonusPlaceholderText: {
        width: Dimensions.get('window').width / 100 * 45,

        fontSize: 11,
        textAlign: 'center',
        color: '#898989',
    },
    balanceContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderColor: '#DCDCDA',
        flexDirection: 'row',
        paddingTop: 15,
        paddingLeft: 10,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    typeChangeButtonText: {
        fontSize: 12,
        color: '#656d73',
    },
  /*  IDDChart: {
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
        top: 25,
        left: 20,
        textAlign: 'center',
        color: '#999',
        fontSize: 12,
        fontWeight: "400"
    },

});

module.exports = Balance;