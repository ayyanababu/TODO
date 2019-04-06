import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RootRoute from './AppRoutes/RootRoute';
import { Provider } from 'react-redux'
import ConfigureStore from './redux/Store';

export default class App extends Component {
  render() {
    const { store } = ConfigureStore();
    return (
      <Provider store={store}>
        <View style={{ flex:1,  backgroundColor: 'white'}}>
         <RootRoute />
        </View>
      </Provider>
    )
  }
}
