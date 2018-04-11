import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onChangeText(text) {
    this.setState(() => ({ text: text.toUpperCase() }));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.onChangeText(text)}
          style={styles.input}
          placeholder={'Enter text here'}
        />
        <Text style={styles.text}>{this.state.text}</Text>
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
    margin: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },

  input: {
    height: 40,
    alignSelf: 'stretch',
    fontSize: 20,
  },

  text: {
    marginTop: 20,
    fontSize: 24,
  },
});
