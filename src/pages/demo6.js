import React, { Component } from 'react'
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export default class Demo6 extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {

  }

  render () {
    const animtedStyle = {
    }
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
