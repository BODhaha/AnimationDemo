import React, { Component } from 'react'
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native'

class Child extends Component {
  componentDidMount () {
    alert('我是 child')
  }

  componentWillUpdate(nextProps, nextState) {
    alert('我是 child shouldComponentUpdate')
  }

  render () {
    return (
      <View style={styles.child}>
        <Text style={styles.white}>Child</Text>
      </View>
    )
  }
}

export default class State extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.changeCount.bind(this)
  }

  changeCount () {
    this.setState({
      count: 2
    })
  }

  render () {
    return (
      <View style={styles.parent}>
        <TouchableWithoutFeedback onPress={() => {this.changeCount()}}>
          <View>
            <Text style={styles.white}>点击我改变父组件的 state count: {this.state.count}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Child></Child>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    padding: 20,
    backgroundColor: 'blue'
  },
  child: {
    backgroundColor: 'purple'
  },
  white: {
    fontSize: 18,
    color: '#ffffff'
  }
})
