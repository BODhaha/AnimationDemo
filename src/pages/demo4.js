import React, { Component } from 'react'
import {View, Text, StyleSheet, Animated, ScrollView } from 'react-native'

export default class Demo4 extends Component {

  componentWillMount () {
    this._animatedValue = new Animated.Value(0)
  }

  render () {
    var interpolatedColor = this._animatedValue.interpolate({
      inputRange: [0, 1500],
      outputRange: ['#f7daf2', '#cab9fb'],
      extrapolate: 'clamp'
    });

    var event = Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            y: this._animatedValue
          }
        }
      }
    ])
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}} onScroll={event} scrollEventThrottle={16}>
          <Animated.View style={{height: 1500, backgroundColor: interpolatedColor}} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
