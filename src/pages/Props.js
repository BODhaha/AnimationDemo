import React, {Component} from 'react'
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'

class Greeting extends Component {
  static defaultProps = {
    name: 'world'
  }

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    return (
      <Text>Hello, {this.props.name}!</Text>
    )
  }
}

export default class Props extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'somebody'
    }
  }

  render () {
    return (
      <View>
        <Greeting name={this.state.name}></Greeting>
      </View>
    )
  }
}
