/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
    AppRegistry,
    Navigator,
    StyleSheet,
    Component,
    Dimensions,
    View,
    ToolbarAndroid,
    TouchableHighlight,
    Text
} from 'react-native';

var Login = require('./Login');
var Topup = require('./Topup');
var Locateus = require('./Locateus');
var Balance = require('./Balance');
var Promotions = require('./Promotions');
var Settings = require('./Settings');


class TestProject extends React.Component {
    render() {
        return (
            <Navigator
                initialRoute={{id: 'login'}}
                renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 'login':
                return (<Login navigator={navigator} title="login"/>);
            case 'topup':
                return (<Topup navigator={navigator} title="topup"/>);
            case 'locateus':
                return (<Locateus navigator={navigator} title="locateus"/>);
            case 'balance':
                return (<Balance navigator={navigator} title="balance"/>);
            case 'promotions':
                return (<Promotions navigator={navigator} title="promotions"/>);
            case 'settings':
                return (<Settings navigator={navigator} title="settings"/>);
        }
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#3f4952',
        paddingTop: 20,
        height: Dimensions.get('window').height,
    },
    container: {
    },
});

AppRegistry.registerComponent('TestProject', () => TestProject);