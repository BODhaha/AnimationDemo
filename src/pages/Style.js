import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class Style extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false
    }
    this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render () {
    return (
      <View>
        <View style={[
            {padding: 20, marginBottom: 10, backgroundColor: 'blue'},
            this.state.isActive && styles.active
          ]}>
          <Text style={{fontSize: 20, color: '#ffffff'}}>box 1</Text>
        </View>

        <View style={[styles.box, this.state.isActive && styles.active]}>
          <Text style={styles.boxText}>box 2</Text>
        </View>

        <View style={styles.flex}>
          <TouchableWithoutFeedback onPress={() => {
            this.toggle()
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>press me</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'blue'
  },
  boxText: {
    fontSize: 20,
    color: '#ffffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#999999'
  },
  buttonText: {
    color: '#ffffff'
  },
  active: {
    backgroundColor: 'purple'
  }
})
