import React from 'react'
import { StackNavigator } from 'react-navigation'
import App from '../App.js'
import Demo1 from '../pages/demo1'
import Demo2 from '../pages/demo2'
import Demo3 from '../pages/demo3'
import Demo4 from '../pages/demo4'
import Demo5 from '../pages/demo5'
import Demo6 from '../pages/demo6'

const RootNavigator = StackNavigator({
  App: {
    screen: App,
    navigationOptions: ({navigation}) => ({
      title: '动画 demo'
    })
  },
  Demo1: {
    screen: Demo1,
    navigationOptions: ({navigation}) => ({
      title: 'Animated.timing'
    })
  },
  Demo2: {
    screen: Demo2,
    navigationOptions: ({navigation}) => ({
      title: 'Animated.timing'
    })
  },
  Demo3: {
    screen: Demo3,
    navigationOptions: ({navigation}) => ({
      title: 'Animated.Pan Responder'
    })
  },
  Demo4: {
    screen: Demo4,
    navigationOptions: ({navigation}) => ({
      title: 'Demo4'
    })
  },
  Demo5: {
    screen: Demo5,
    navigationOptions: ({navigation}) => ({
      title: 'Demo5'
    })
  },
  Demo6: {
    screen: Demo6,
    navigationOptions: ({navigation}) => ({
      title: 'Demo6'
    })
  }
})

export default () => <RootNavigator/>
