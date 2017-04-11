import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 import Graph from './src/graph';

export default class D3ReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Graph />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('D3ReactNative', () => D3ReactNative);
