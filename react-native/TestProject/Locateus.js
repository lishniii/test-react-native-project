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

var Modal = require('react-native-modalbox');
var Tabs = require('react-native-tabs');
var _navigator;
var type = ['M1 Store', 'Apple', 'Samsung'];
var location = ['All regions', 'Central', 'North', 'South', 'West', 'East'];

class Locateus extends Component {
    constructor(props, context) {
        super(props, context);
        var typeDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var locationDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
            typeDataSource: typeDataSource.cloneWithRows(type),
            locationDataSource: locationDataSource.cloneWithRows(location),
            selectedType: type[0],
            selectedLocation: location[0]
        };

        this._renderRowType = this._renderRowType.bind(this);
        this._renderRowLocation = this._renderRowLocation.bind(this);
    }

    changeStore(rowType) {
        this.setState({
            selectedType: rowType
        });
        this.closeModalChangeType();
    }

    changeLocation(row) {
        this.setState({
            selectedLocation: row
        });
        this.closeModalChangeLocation();
    }

    _renderRowType(rowType) {
        return (
            <ScrollView>
                <TouchableHighlight onPress={this.changeStore.bind(this, rowType)}
                                    style={styles.TypeModalList}>
                    <Text style={{ fontSize:14 }}>{rowType}</Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }

    _renderRowLocation(row) {
        return (
            <ScrollView>
                <TouchableHighlight onPress={this.changeLocation.bind(this, row)}
                                    style={styles.LocationModalList}>
                    <Text style={{ fontSize:14 }}>{row}</Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }

    openModalChangeType() {
        this.refs['modalChangeType'].open()
    }

    openModalChangeLocation() {
        this.refs['modalChangeLocation'].open()
    }

    closeModalChangeLocation() {
        this.refs['modalChangeLocation'].close()
    }

    closeModalChangeType() {
        this.refs['modalChangeType'].close()
    }

    toggleDisable() {
        this.setState({isDisabled: !this.state.isDisabled})
    }

    toggleSwipeToClose() {
        this.setState({swipeToClose: !this.state.swipeToClose})
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
                    <Text style={styles.heading}>Locate Us</Text>
                </View>
                <View style={styles.locateUsContainer}>
                    <View style={styles.mapContainer}><Image
                        source={require('./resources/images/map.png')}
                        /></View>
                    <ScrollView>
                        <View style={styles.typeContainer}><Text style={styles.typeHeadingText}>TYPE OF
                            STORE</Text></View>

                        <TouchableHighlight style={styles.changeTypeButton} onPress={this.openModalChangeType.bind(this)} underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.typePlaceholderContainer}>
                                <Text style={styles.typePlaceholderText}>{this.state.selectedType}</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <View style={styles.locationContainer}><Text
                            style={styles.locationHeadingText}>AREA</Text>
                        </View>

                        <TouchableHighlight style={styles.changeLocationButton} onPress={this.openModalChangeLocation.bind(this)} underlayColor='rgba(0, 0, 0, 0.1)'>
                            <View style={styles.locationPlaceholderContainer}>
                                <Text style={styles.locationPlaceholderText}>{this.state.selectedLocation}</Text>
                                <Image style={styles.arrowImage} source={require('./resources/icons/arrow.png')}/>
                            </View>
                        </TouchableHighlight>

                        <View style={styles.resultsContainer}>
                            <Text style={styles.resultsHeadingText}>STORES</Text>
                        </View>
                        <View style={styles.results}>
                            <View style={styles.resultsDetailsContainer}>
                                <Image
                                    style={styles.locationIcon}
                                    source={require('./resources/icons/location.png')}
                                    />
                                <View style={styles.resultsDetails}>
                                    <Text style={styles.resultsStoreName}>Causeway Point</Text>
                                    <Text style={styles.resultsDetailsAddress}>1, Woodlands Square
                                        #03-01 Causeway Point
                                        Singapore 738099
                                        Nearest MRT Station:
                                        Woodlands (NS9)</Text>
                                    <Text style={styles.resultsOpeningHoursHeading}>Operating Hours:</Text>
                                    <Text style={styles.resultsOpeningHours}>Operating Hours:
                                        10am-7pm (Mon-Fri)
                                        10am-5pm (Sat)
                                        Closed on Sun Public Holidays
                                    </Text></View></View>
                        </View>
                        <View style={styles.results}>
                            <View style={styles.resultsDetailsContainer}>
                                <Image
                                    style={styles.locationIcon}
                                    source={require('./resources/icons/location.png')}
                                    />
                                <View style={styles.resultsDetails}>
                                    <Text style={styles.resultsStoreName}>Paragon </Text>
                                    <Text style={styles.resultsDetailsAddress}>290 Orchard Road
                                        #B1-28/29 Paragon
                                        Singapore 238859</Text>
                                    <Text style={styles.resultsOpeningHoursHeading}>Operating Hours:</Text>
                                    <Text style={styles.resultsOpeningHours}>Operating Hours:
                                        11am-9pm (Daily)
                                    </Text></View></View>
                        </View>
                    </ScrollView>
                </View>
                <Modal style={styles.openModalChangeType} position={"center"} ref={'modalChangeType'}
                       isDisabled={this.state.isDisabled}>
                    <View>
                        <View style={styles.modalHeading}><Text style={styles.modalHeadingText}>Type of
                            Store</Text>
                            <TouchableHighlight underlayColor='rgba(0, 0, 0, 0.1)' style={styles.modalCloseButton}
                                                onPress={this.closeModalChangeType.bind(this)}><Text
                                style={styles.modalHeadingText}>x</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <ListView
                                dataSource={this.state.typeDataSource}
                                renderRow={this._renderRowType}
                                />
                        </View>
                    </View>
                </Modal>
                <Modal style={styles.openModalChangeLocation} position={"center"} ref={'modalChangeLocation'}
                       isDisabled={this.state.isDisabled}>
                    <View>
                        <View style={styles.modalHeading}>
                            <Text style={styles.modalHeadingText}>Location</Text>
                            <TouchableHighlight underlayColor='rgba(0, 0, 0, 0.1)' style={styles.modalCloseButton}
                                                onPress={this.closeModalChangeLocation.bind(this)}><Text
                                style={styles.modalHeadingText}>x</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <ListView
                                dataSource={this.state.locationDataSource}
                                renderRow={this._renderRowLocation}
                                />
                        </View>
                    </View>
                </Modal>
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
    locateUsContainer: {
        backgroundColor: '#EEEFEA',
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
        marginTop: 12,
        fontSize: 10,
        textAlign: 'left',
        color: '#A7A8A3',
        fontWeight: 'bold',
    },
    typePlaceholderContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
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
        marginTop: 12,
        fontSize: 10,
        textAlign: 'left',
        color: '#A7A8A3',
        fontWeight: 'bold',
    },
    locationPlaceholderContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#DCDCDA',
        flexDirection: 'row',
    },
    changeLocationButton: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 8,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderBottomWidth: 1,
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
        height: 30
    },
    resultsHeadingText: {
        marginLeft: 20,
        marginTop: 12,
        fontSize: 10,
        textAlign: 'left',
        color: '#A7A8A3',
        fontWeight: 'bold',
    },
    results: {
        flexDirection: 'row',

    },
    resultsDetails: {
        flexDirection: 'column',
    },
    resultsDetailsContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderColor: '#DCDCDA',
        flexDirection: 'row',
    },
    resultsStoreName: {
        width: Dimensions.get('window').width / 100 * 85,
        marginLeft: 10,
        marginTop: 15,
        fontSize: 14,
        textAlign: 'left',
        color: '#898989',
        fontWeight: 'bold'
    },
    resultsDetailsAddress: {
        width: Dimensions.get('window').width / 100 * 85,
        marginLeft: 10,
        marginTop: 5,
        fontSize: 12,
        textAlign: 'left',
        color: '#898989',
    },
    resultsOpeningHoursHeading: {
        width: Dimensions.get('window').width / 100 * 85,
        marginLeft: 10,
        marginTop: 5,
        fontSize: 12,
        textAlign: 'left',
        color: '#898989',
        fontWeight: 'bold'
    },
    resultsOpeningHours: {
        width: Dimensions.get('window').width / 100 * 85,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 15,
        fontSize: 12,
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
        height: Dimensions.get('window').height / 100 * 45,
        backgroundColor: '#fbfbfb',
    },
    modalHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width / 100 * 70,
        height: Dimensions.get('window').height / 100 * 8,
        backgroundColor: '#f37124',
    },
    modalCloseButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.get('window').height / 100 * 10,
        height: Dimensions.get('window').height / 100 * 10,
    },
    modalHeadingText: {
        marginTop: 16,
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        paddingLeft: 50,
    },
    TypeModalList: {
        height: 40,
        backgroundColor: '#efefef',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LocationModalList: {
        height: 40,
        backgroundColor: '#efefef',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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

module.exports = Locateus;
/**
 * Created by lishni on 4/4/16.
 */
