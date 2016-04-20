/**
 * Created by lishni on 4/4/16.
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableHighlight,
    TextInput
} from 'react-native';

class Home extends Component {
    render() {
        return (
            <View>
                <View style={styles.background}>
                    <View style={styles.container}>
                        <View style={styles.rectangle}>
                            <Text style={styles.welcomeText}>Welcome to</Text>
                            <Text style={styles.welcomeMessageText}>M1 My Prepaid Account!</Text>
                            <Text style={styles.welcomeDescriptionText}>No Data charges for M1 Prepaid customers when using this App.</Text>
                        </View>
                        <View style={styles.messageBox}>
                            <Text style={styles.descriptionTextPartOne}>To begin please enter your </Text>
                            <Text style={styles.descriptionTextPartTwo}>Mobile Number </Text>
                            <TextInput
                                style={styles.textArea}
                                placeholder= "+65"
                                />
                            <TouchableHighlight style={styles.button}>
                                <Text style={styles.buttonText}>OK</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.footerTextContainer}>
                        <Text style={styles.footerText}>Copyrights 2015 M1 My Prepaid. FAQ Terms and Conditions</Text>
                    </View>
                </View>
                <Image
                    style={styles.icon}
                    source={require('./resources/images/logo.png')}
                    />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#3f4952',
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
        fontSize:9,
        color: '#8e9195',
        textAlign: 'center'
    },
    rectangle: {
        width: 150 * 2,
        height: 200,
        backgroundColor: '#f37022',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 20,
    },
    icon: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        marginLeft: 30,
        marginLeft: -100,
        alignItems: 'flex-start',
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
        width:120 * 2,
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
    descriptionTextPartOne: {
        fontWeight: '400',
        fontSize: 13,
        color: '#717c83',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionTextPartTwo: {
        marginTop: 5,
        fontWeight: '400',
        fontSize: 13,
        color: '#717c83',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 32,
        width: 210,
        flexDirection: 'row',
        borderRadius: 5,
        paddingTop: 6,
        backgroundColor: '#4c74a7',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#b6c5d7',
    },
    textArea: {
        height: 32,
        width: 210,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#e7ebee',
        color: '#b8c3cc',
        borderRadius: 60,
        paddingBottom: 6,
        paddingLeft: 15,
        paddingRight: 15,
    }
});

AppRegistry.registerComponent('Home', () => Home);

