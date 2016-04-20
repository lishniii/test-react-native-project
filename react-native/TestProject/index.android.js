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

var First = require('./First');
var Second = require('./Second');
var Third = require('./Third');
var Fourth = require('./Fourth');


class TestProject extends React.Component {
    render() {
        return (
            <Navigator
                initialRoute={{id: 'third'}}
                renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 'first':
                return (<First navigator={navigator} title="first"/>);
            case 'second':
                return (<Second navigator={navigator} title="second"/>);
            case 'third':
                return (<Third navigator={navigator} title="third"/>);
            case 'fourth':
                return (<Fourth navigator={navigator} title="fourth"/>);
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