import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class LoginContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitClicked: false,
        }
        console.log('constructor in login')
    }


    componentDidMount = () => {
        console.log('component did mount in Login');
    }

    onLoginClicked = () => {
        console.log('login button clicked');
        // this.props.navigation.navigate('app');
        // ES6

        // let navigation = this.props.navigation
        const { navigation = {} } = this.props;
        const { navigate } = navigation;
        if ( navigate ){
            navigate('app');
        }
    }

    render(){
        console.log('render in login ',)
        return(
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={this.onLoginClicked}>
                    <Text style={{ color: 'white', alignSelf: 'center',height: 50, paddingHorizontal: 20, backgroundColor: 'orange'}}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}