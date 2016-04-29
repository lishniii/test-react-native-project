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
    Image
} from 'react-native';

var _navigator; // we fill this up upon on first navigation.

class Login extends Component {
    navTopUp() {
        this.props.navigator.push({
            id: 'topup'
        })
    }
    render() {
        return (
            <View>
                <View style={styles.background}>
                    <Image
                        style={styles.backdrop}
                        source={require('./resources/images/background.jpg')}>
                        <View style={styles.backdropView}>
                    <View style={styles.container}>

                                <Image
                                    style={styles.logo}
                                    source={require('./resources/images/logo.png')}
                                    />
                                <View style={styles.welcomeMessageContainer}>
                                    <Text style={styles.welcomeText}>Welcome to</Text>
                                    <Text style={styles.welcomeMessageText}>M1 Prepaid Portal</Text>
                                    <Text style={styles.welcomeDescriptionText}>No Data Charges for M1 Prepaid Customers
                                        when
                                        using this App.</Text>
                                </View>
                                <View style={styles.messageBox}>
                                    <Text style={styles.descriptionTextPartOne}>To begin please enter your </Text>
                                    <Text style={styles.descriptionTextPartTwo}>Mobile Number </Text>
                                    <TextInput
                                        style={styles.textArea}
                                        placeholder="+65"
                                        />
                                    <TouchableHighlight style={styles.button} onPress={this.navTopUp.bind(this)}>
                                        <Text style={styles.buttonText}>Login</Text>
                                    </TouchableHighlight>
                                </View>

                                <View style={styles.footerTextContainer}>
                                    <Text style={styles.footerText}>Copyright &copy; 2016 M1 Prepaid Portal. All Rights Reserved.</Text>
                                </View>
                            </View>
                        </View>
                        </Image>




                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    backdrop: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    backdropView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(0,0,0,.6)'
    },
    container: {
        marginTop: 50,
        flexDirection: 'column',
        height: Dimensions.get('window').height / 100 * 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    footerTextContainer: {
        width: 300,
        height: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        paddingBottom: 35,
    },
    footerText: {
        fontSize: 9,
        color: '#8e9195',
        textAlign: 'center'
    },
    welcomeMessageContainer: {
        width: 150 * 2,
        height: 210,
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 20,
    },
    logo: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        alignSelf: 'center',
    },
    welcomeText: {
        fontFamily: 'sans-serif-light',
        fontSize: 24,
        color: '#fff'
    },
    welcomeMessageText: {
        fontFamily: 'sans-serif-medium',
        fontSize: 20,
        color: '#fff'
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
        marginTop: 25,
        marginBottom: 50,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    descriptionTextPartOne: {
        fontWeight: '400',
        fontSize: 13,
        color: '#bfc5c9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionTextPartTwo: {
        marginTop: 5,
        fontWeight: '400',
        fontSize: 13,
        color: '#bfc5c9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 40,
        width: 215,
        flexDirection: 'row',
        borderRadius: 5,
        paddingTop: 9,
        backgroundColor: '#4c74a7',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#b6c5d7',
    },
    textArea: {
        height: 40,
        width: 215,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#e7ebee',
        color: '#b8c3cc',
        borderRadius: 60,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    }
});

module.exports = Login;