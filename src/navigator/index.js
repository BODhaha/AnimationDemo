import React from 'react'
import { StackNavigator } from 'react-navigation'
import App from '../App.js'
import Demo1 from '../pages/demo1'
import Demo2 from '../pages/demo2'
import Demo3 from '../pages/demo3'
import Demo4 from '../pages/demo4'
import Demo5 from '../pages/demo5'
import HelloWorld01 from '../pages/HelloWorld01'
import HelloWorld02 from '../pages/HelloWorld02'
import Props from '../pages/Props'
import State from '../pages/State'
import SetState from '../pages/SetState'
import Style from '../pages/Style'

const RootNavigator = StackNavigator({
  App: {
    screen: App,
    navigationOptions: ({navigation}) => ({
      title: 'demo'
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
  HelloWorld01: {
    screen: HelloWorld01,
    navigationOptions: ({navigation}) => ({
      title: 'HelloWorld JSX'
    })
  },
  HelloWorld02: {
    screen: HelloWorld02,
    navigationOptions: ({navigation}) => ({
      title: 'HelloWorld Javascript'
    })
  },
  Props: {
    screen: Props,
    navigationOptions: ({navigation}) => ({
      title: 'Props'
    })
  },
  State: {
    screen: State,
    navigationOptions: ({navigation}) => ({
      title: 'State'
    })
  },
  SetState: {
    screen: SetState,
    navigationOptions: ({navigation}) => ({
      title: 'SetState'
    })
  },
  Style: {
    screen: Style,
    navigationOptions: ({navigation}) => ({
      title: 'Style'
    })
  }
})

export default () => <RootNavigator/>
