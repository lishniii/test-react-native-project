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
var _navigator;
var type = ['M1 Store', 'Apple', 'Samsung'];
var location = ['All regions', 'Central', 'North', 'South', 'West', 'East'];

class Third extends Component {
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
                        <View style={styles.typeContainer}><Text style={styles.typeHeadingText}>TYPE OF
                            STORE</Text></View>
                        <View style={styles.typePlaceholderContainer}><Text
                            style={styles.typePlaceholderText}>{this.state.selectedType}</Text><TouchableHighlight
                            style={styles.changeTypeButton}
                            onPress={this.openModalChangeType.bind(this)}><Image
                            style={{width: 15, height: 15,}}
                            source={require('./resources/icons/arrow.png')}
                            />
                        </TouchableHighlight></View>
                        <View style={styles.locationContainer}><Text
                            style={styles.locationHeadingText}>AREA</Text></View>
                        <View style={styles.locationPlaceholderContainer}><Text
                            style={styles.locationPlaceholderText}>{this.state.selectedLocation}</Text><TouchableHighlight
                            style={styles.changeLocationButton} onPress={this.openModalChangeLocation.bind(this)}><Image
                            style={{width: 15, height: 15,}}
                            source={require('./resources/icons/arrow.png')}
                            />
                        </TouchableHighlight></View>

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
            </DrawerLayoutAndroid>

        );
    }


}

const styles = StyleSheet.create({

    background: {
        backgroundColor: '#EEEFEA',
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
        height: 50,
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#DCDCDA',
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
        backgroundColor: '#fbfbfb',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#DCDCDA',
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
        height: Dimensions.get('window').height / 100 * 47,
        backgroundColor: '#fbfbfb',
    },
    modalHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width / 100 * 70,
        height: Dimensions.get('window').height / 100 * 10,
        backgroundColor: '#f37124',
    },
    modalCloseButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.get('window').height / 100 * 10,
        height: Dimensions.get('window').height / 100 * 10,
    },
    modalHeadingText: {
        marginTop: 20,
        fontSize: 20,
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
    }
});

module.exports = Third;
/**
 * Created by lishni on 4/4/16.
 */
