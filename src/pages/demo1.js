import React, { Component } from 'react'
import {View, Text, StyleSheet, Animated, Easing } from 'react-native'

export default class Demo1 extends Component {
  componentWillMount () {
    this.animatedValue = new Animated.Value(100)
  }

  componentDidMount () {
    Animated.timing(this.animatedValue, {
      toValue: 250,
      duration: 1000,
      easing: Easing.bounce
    }).start()
  }

  render () {
    const animtedStyle = {height: this.animatedValue}
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animtedStyle]}></Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 100,
    backgroundColor: '#333333'
  }
})
