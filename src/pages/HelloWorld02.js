import React, { Component } from 'react'
import {View, Text} from 'react-native'
export default class Demo1 extends Component {
  render () {
    return React.createElement(Text, {style: {color: 'red'}}, ['Hello world'])
  }
}
