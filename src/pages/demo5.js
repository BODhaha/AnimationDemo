import React, { Component } from 'react'
import createReactClass from 'create-react-class'
import {View, Text, StyleSheet, Animated, ViewPropTypes, TouchableWithoutFeedback, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window')

var ANIMATION_END_Y = Math.ceil(deviceHeight * .5)
var NEGATIVE_END_Y = ANIMATION_END_Y * -1
var startCount = 1

function getRandomNumber (min, max) {
  return Math.random() * (max-min) + min
}

class Heart extends Component {
  render () {
    return (
      <View {...this.props} style={[styles.heart, this.props.style]}>
        <View style={[styles.heartShape, styles.leftHeart]}></View>
        <View style={[styles.heartShape, styles.rightHeart]}></View>
      </View>
    )
  }
}

class AnimatedHeart extends Component {
  static propTypes = {
    onComplete: PropTypes.func,
    style: ViewPropTypes.style
  }

  static defaultProps = {
    onComplete: () => {}
  }

  constructor (props) {
    super(props)
    this.state = {
      position: new Animated.Value(0)
    }
  }

  componentWillMount () {
    this._yAnimation = this.state.position.interpolate({
      inputRange: [NEGATIVE_END_Y, 0],
      outputRange: [ANIMATION_END_Y, 0]
    })
    this._opacityAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y],
      outputRange: [1, 0]
    })
    this._scaleAnimation = this._yAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.2, 1],
      extrapolate: 'clamp'
    })
    this._xAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/2, ANIMATION_END_Y],
      outputRange: [0, 15, 0]
    })
    this._rotateAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/4, ANIMATION_END_Y/3, ANIMATION_END_Y/2, ANIMATION_END_Y],
      outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg']
    })
  }

  componentDidMount () {
    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: NEGATIVE_END_Y
    }).start(this.props.onComplete)
  }

  getHeartAnimationStyle () {
    return {
      transform: [
        {translateY: this.state.position},
        {translateX: this._xAnimation},
        {scale: this._scaleAnimation},
        {rotate: this._rotateAnimation}
      ],
      opacity: this._opacityAnimation
    }
  }

  render () {
    return (
      <Animated.View style={[styles.heartWrap, this.getHeartAnimationStyle(), this.props.style]}>
        <Heart></Heart>
      </Animated.View>
    )
  }
}

export default class HeartAnimation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hearts: []
    }
  }

  addHeart () {
    startCount += 1
    this.state.hearts.push({
      id: startCount,
      right: getRandomNumber(50, 150)
    })
    this.setState({hearts: this.state.hearts})
  }

  removeHeart (v) {
    var index = this.state.hearts.findIndex(() => {
      this.state.hearts.splice(index, 1)
      this.setState({hearts: this.state.hearts})
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={this.addHeart.bind(this)}>
          <View style={styles.container}>
            {
              this.state.hearts.map((v, i) => {
                return (
                  <AnimatedHeart
                    key={v.id}
                    onComplete={this.removeHeart.bind(this, v.id)}
                    style={{right: v.right}}>

                  </AnimatedHeart>
                )
              }, this)
            }
          </View>
        </TouchableWithoutFeedback>
        <AnimatedHeart>
        </AnimatedHeart>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heartWrap: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'transparent'
  },
  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  },
  heartShape : {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1'
  },
  leftHeart: {
    transform: [
      {rotate: '-45deg'}
    ],
    left: 5
  },
  rightHeart: {
    transform: [{
      rotate: '45deg'
    }],
    right: 5
  }
})
