import React, { Component } from 'react'
import { Text, View, SafeAreaView,Image, TouchableOpacity, StyleSheet, AppRegistry} from 'react-native';

export default class DetailsContainer extends Component {
    gotoHome = () => {
        this.props.navigation.pop();
    }
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
          <View style={styles.child1} >
            <Image source={require('../../assets/cat.jpg')} style={{ height: 60, width: 50}}/>
          </View>
          <View style={styles.child2}/>
          <View style={styles.child3}/>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    flexDirection: 'row',
  },
  child1: {
    flex: 0.3,
    backgroundColor: '#f00'
  },
  child2: {
    flex: 0.4,
    backgroundColor: '#0f0'
  },
  child3: {
    flex: 0.4,
    backgroundColor: '#00f'
  }
});

AppRegistry.registerComponent('DetailsContainer', () => DetailsContainer);