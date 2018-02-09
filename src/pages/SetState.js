import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from  'react-native'

class BadCounter extends Component{
  constructor(props){
    super(props);
    this.state = {count : 0}
    this.incrementCount = this.incrementCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
  }
  incrementCount(){
    this.setState({count : this.state.count + 1})
    this.setState({count : this.state.count + 2})
  }
  decreaseCount () {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      <View>
        <TouchableWithoutFeedback onPress={
          ()=> {
            this.incrementCount()
            this.decreaseCount()
          }
          }>
          <View>
            <Text>Increment</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text>{this.state.count}</Text>
      </View>
    )
  }
}

class GoodCounter extends Component{
  constructor(props){
    super(props);
    this.state = {count : 0}
    this.incrementCount = this.incrementCount.bind(this)
  }
  incrementCount(){
   this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
   this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
  }
  render(){
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.incrementCount}>
          <View>
            <Text>Increment</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text>{this.state.count}</Text>
      </View>
    )
  }
}

export default class SetState extends Component {
  render () {
    return (
      <View>
        <BadCounter></BadCounter>
        <GoodCounter></GoodCounter>
      </View>
    )
  }
}
