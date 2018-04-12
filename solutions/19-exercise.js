import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello: {RNFS.DocumentDirectoryPath}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'yellow',
  },

  text: {
    color: 'black',
    fontSize: 16,
  },
});
