import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Constants } from 'expo';

class MyWeirdButton extends Component {
  constructor(props) {
    super(props);
    this.state = { width: new Animated.Value(200) };
  }

  onPressDown = () => {
    Animated.spring(this.state.width, { toValue: 140, speed: 50 }).start();
  };
  onPressUp = () => {
    Animated.spring(this.state.width, { toValue: 200, speed: 50 }).start();
  };

  render() {
    return (
      <TouchableOpacity
        onPressIn={this.onPressDown}
        onPressOut={this.onPressUp}
        activeOpacity={0.8}
      >
        <Animated.View
          style={[styles.btnContainer, { width: this.state.width }]}
        >
          <Text style={styles.btnText}>{this.props.title}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, margin: 20 }}>Click this:</Text>
        <MyWeirdButton title={'Send'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },

  btnContainer: {
    height: 60,
    backgroundColor: '#3b5bdb',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});
