/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentWillMount () {
    console.log('111: ', this.props)
    console.log('this.props.navigation: ', this.props.navigation)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {navigate('Demo1')}} style={styles.row}>
          <Text>Animated.timing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigate('Demo2')}} style={styles.row}>
          <Text>Animated.spring</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigate('Demo3')}} style={styles.row}>
          <Text>panResponder</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigate('Demo4')}} style={styles.row}>
          <Text>interpolate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigate('Demo5')}} style={styles.row}>
          <Text>heart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  row: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10
  }
});
