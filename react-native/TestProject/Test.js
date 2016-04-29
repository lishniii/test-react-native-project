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
} from 'react-native';

var Radio = require('react-native-radio-button-classic');
var Option = Radio.Option;

var _navigator; // we fill this up upon on first navigation.

class Second extends Component {
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


    navThird() {
        this.props.navigator.push({
            id: 'third'
        })
    }

    setRenderState(value) {
        this.setState({
            renderView: value
        });
    }

    renderView() {
        if (this.state.renderView == 1) {
            return (
                <View style={styles.rectangle}>
                    <Text style={styles.descriptionText}>Simple follow the below steps to Top-Up your
                        card</Text>
                    <View style={styles.messageTextContainer}>
                        <Text style={styles.messageText}>Select your Top-Up card</Text>
                    </View>
                    <View>

                        <View style={styles.TopUpContainerMain}>
                            <View style={styles.TopUpContainerOne}>
                                <View style={styles.TopUpButtonOne}></View>
                                <View style={styles.TopUpButtonTwo}></View>
                            </View>


                            <View style={styles.TopUpContainerTwo}>
                                <Radio onSelect={this.onSelect.bind(this)}
                                       defaultSelect={this.state.optionSelected - 1}>
                                    <Option
                                        color="gray" selectedColor="#848a90"><Text
                                        style={styles.descriptionTextTopUp}>S$ 17 M1 Top-Up card</Text></Option>

                                    <Option
                                        color="gray" selectedColor="#848a90"><Text
                                        style={styles.descriptionTextTopUp}>S$ 18 M1 Top-Up card</Text></Option>

                                </Radio>
                            </View>

                        </View>
                    </View>
                    <TouchableHighlight style={styles.button} onPress={this.navThird.bind(this)}>
                        <Text style={styles.buttonText}>PAY NOW</Text>
                    </TouchableHighlight>
                </View>
            )
        } else if (this.state.renderView == 2) {
            return (
                <View style={styles.rectangle}>
                    <Text style={styles.descriptionText}>2</Text>
                </View>
            )
        } else if (this.state.renderView == 3) {
            return (
                <View style={styles.rectangle}>
                    <Text style={styles.descriptionText}>3</Text>
                </View>
            )
        } else if (this.state.renderView == 4) {
            return (
                <View style={styles.rectangle}>
                    <Text style={styles.descriptionText}>4</Text>
                </View>
            )
        }

    }

    render() {
        var buttonOneColor = '#f37022';
        var buttonTwoColor = '#d4d5d7';
        var buttonThreeColor = '#d4d5d7';
        var buttonFourColor = '#d4d5d7';

        if(this.state.renderView == 1) {
            buttonOneColor = '#f37022';
            buttonTwoColor = '#d4d5d7';
            buttonThreeColor = '#d4d5d7';
            buttonFourColor = '#d4d5d7';
        } else if (this.state.renderView == 2) {
            buttonOneColor = '#d4d5d7';
            buttonTwoColor = '#f37022';
            buttonThreeColor = '#d4d5d7';
            buttonFourColor = '#d4d5d7';
        } else if (this.state.renderView == 3) {
            buttonOneColor = '#d4d5d7';
            buttonTwoColor = '#d4d5d7';
            buttonThreeColor = '#f37022';
            buttonFourColor = '#d4d5d7';
        } else {
            buttonOneColor = '#d4d5d7';
            buttonTwoColor = '#d4d5d7';
            buttonThreeColor = '#d4d5d7';
            buttonFourColor = '#f37022';
        }

        return (
            <View>
                <ToolbarAndroid style={styles.toolbar}
                                title={this.props.title}
                                titleColor={'#FFFFFF'}/>
                <View style={styles.background}>
                    <View style={styles.container}>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonBalance}>
                                <TouchableHighlight onPress={this.setRenderState.bind(this, 1)}><View
                                    style={[styles.rectangleBalance, {backgroundColor: buttonOneColor}]}></View></TouchableHighlight>
                            </View>
                            <View style={styles.buttonTopUp}>
                                <TouchableHighlight onPress={this.setRenderState.bind(this, 2)}><View
                                    style={[styles.rectangleBalance, {backgroundColor: buttonTwoColor}]}></View></TouchableHighlight>
                            </View>
                            <View style={styles.buttonPromotions}>
                                <TouchableHighlight onPress={this.setRenderState.bind(this, 3)}><View
                                    style={[styles.rectangleBalance, {backgroundColor: buttonThreeColor}]}></View></TouchableHighlight>
                            </View>
                            <View style={styles.buttonLocation}>
                                <TouchableHighlight onPress={this.setRenderState.bind(this, 4)}><View
                                    style={[styles.rectangleBalance, {backgroundColor: buttonFourColor}]}></View></TouchableHighlight>
                            </View>
                        </View>
                        {this.renderView()}

                    </View>
                    <View style={styles.footerTextContainer}>
                        <Text style={styles.footerText}>Copyrights 2015 M1 My Prepaid. FAQ Terms and Conditions</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#3f4952',
        paddingTop: 20,
        height: Dimensions.get('window').height,
    },
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 40,
        marginBottom: 20,
        height: Dimensions.get('window').height / 100 * 80,
        borderTopWidth: 6,
        borderColor: '#d5d5d7',

    },
    footerTextContainer: {
        width: 300,
        height: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        paddingBottom: 35,
    },
    buttonDropdown: {
        marginRight: 20,
        marginBottom: 5,
    },
    footerText: {
        fontSize: 9,
        color: '#8e9195',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    buttonBalance: {
        marginRight: 10

    },
    rectangleBalance: {
        width: 67,
        height: 67,
        borderRadius: 3,
        backgroundColor: '#d4d5d7',
    },
    buttonTopUp: {
        marginRight: 10
    },
    rectangleTopUp: {
        width: 67,
        height: 67,
        borderRadius: 3,
        backgroundColor: '#d4d5d7',

    },
    buttonPromotions: {
        marginRight: 10
    },
    rectanglePromotions: {
        width: 67,
        height: 67,
        borderRadius: 3,
        backgroundColor: '#d4d5d7',
    },
    buttonLocation: {},
    rectangleLocation: {
        width: 67,
        height: 67,
        borderRadius: 3,
        backgroundColor: '#d4d5d7',
    },
    rectangle: {
        width: 150 * 2,
        height: 335,
        borderWidth: 1,
        borderColor: '#d6d9dd',
        backgroundColor: '#fff',
        alignSelf: 'center',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    messageTextContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    TopUpContainerMain: {
        flexDirection: 'row',
    },
    TopUpContainerOne: {
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
        width: 80,
        height: 68,
    },
    TopUpContainerTwo: {
        flexDirection: 'column',
        marginTop: 33,
        alignItems: 'center',
        width: 120,
        height: 140,
        marginLeft: 30
    },
    TopUpButtonOne: {
        width: 80,
        height: 68,
        borderRadius: 3,
        backgroundColor: '#3a5276',
    },
    TopUpButtonTwo: {
        width: 80,
        height: 68,
        borderRadius: 3,
        marginTop: 20,
        backgroundColor: '#f38e22',
    },
    icon: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        marginLeft: -100,
        alignItems: 'flex-start',
    },
    welcomeText: {
        fontFamily: 'sans-serif-light',
        fontSize: 24,
        color: '#fff'
    },
    messageText: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: '#f37022',
        alignSelf: 'flex-start',
    },
    welcomeDescriptionText: {
        width: 120 * 2,
        height: 100,
        alignItems: 'center',
        fontFamily: 'sans-serif-light',
        fontSize: 15,
        color: '#fff',
        marginTop: 25,
        marginLeft: 26
    },
    messageBox: {
        width: 150 * 2,
        height: 200,
        marginTop: 18,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    descriptionText: {
        fontWeight: '400',
        fontSize: 13,
        color: '#717c83',
        paddingTop: 20,
        alignSelf: 'flex-start',
    },
    descriptionTextTopUp: {
        fontWeight: '400',
        fontSize: 13,
        color: '#717c83',
        paddingTop: 57,
        alignSelf: 'flex-start',
        marginTop: 11,
    },
    descriptionTextTopUpAmount: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#717c83',
        paddingTop: 57,
        alignSelf: 'flex-start',
        marginTop: 11,
    },
    button: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#99a5b6',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 20,
        marginRight: 4,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5

    },
    buttonText: {
        color: '#4f6584',
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});

module.exports = Second;