import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import asset from './assets/expo.symbol.white.png';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={asset} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'blue',
  },
});
