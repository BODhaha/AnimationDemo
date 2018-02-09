import React, { Component } from 'react'
import {View, Text, StyleSheet, Animated, PanResponder } from 'react-native'

export default class Demo2 extends Component {
  componentWillMount () {
    this.animatedValue = new Animated.ValueXY()
    this._value = {x: 0, y: 0}
    this.animatedValue.addListener((value) => {
      this._value = value
    })
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true, // 用户开始触摸时，是否愿意成为响应者
      onMoveShouldSetPanResponder: (evt, gestureState) => true, // 用户移动时，询问是否愿意成为响应者
      onPanResponderGrant: (e, gestureState) => { // 开始响应
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y
        })
        this.animatedValue.setValue({x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([ // 移动
        null, {
          dx: this.animatedValue.x,
          dy: this.animatedValue.y
        }
      ]),
      onPanResponderRelease: (e, gestureState) => { // 触摸结束
        this.animatedValue.flattenOffset()
        Animated.decay(this.animatedValue, {
          deceleration: 0.997,
          velocity: {x: gestureState.vx, y: gestureState.vy}
        }).start()
      }
    })
  }

  render () {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform()
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
          <Text style={styles.text}>Drag Me</Text>
        </Animated.View>
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
    width: 150,
    height: 150,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff'
  }
})
