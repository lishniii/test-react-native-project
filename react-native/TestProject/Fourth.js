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
} from 'react-native';

var _navigator;

class Fourth extends Component {
    navSecond() {
        this.props.navigator.push({
            id: 'second'
        })
    }
    render() {
        return (

                    <TouchableHighlight onPress={this.navSecond.bind(this)}>
                        <Text
                            style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Fourth page</Text>
                    </TouchableHighlight>

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
        backgroundColor: '#f37124',
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        height: Dimensions.get('window').height / 100 * 10,

    },
    menuIcon: {

    },
});

module.exports = Fourth;
/**
 * Created by lishni on 4/4/16.
 */
