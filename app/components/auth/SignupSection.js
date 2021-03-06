import React, {Component} from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import {Left, Right} from 'native-base';
import {withNavigation} from 'react-navigation';

class SignupSection extends Component {

    render() {
        console.log(this.props.navigation);
        return (
            <View style={styles.container}>
                <Left>
                    <Text onPress={ () => this.props.navigation.navigate('SignUp') }
                          style={styles.text}>Already have and account?
                    </Text>
                </Left>
                <Right>
                    <Text onPress={ () => this.props.navigation.navigate('Forgot') }
                          style={styles.text}>Forgot Password?
                    </Text>
                </Right>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: 'row',
        padding: 20
    },
    text: {
        color: 'steelblue',
        backgroundColor: 'transparent'
    },
});

export default withNavigation(SignupSection);