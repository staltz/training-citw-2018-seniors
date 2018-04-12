import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { batteryLevel: undefined };
  }

  componentDidMount() {
    setInterval(() => {
      DeviceInfo.getBatteryLevel().then(batteryLevel => {
        this.setState({ batteryLevel: batteryLevel * 100 });
      });
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {typeof this.state.batteryLevel === 'number'
            ? `${this.state.batteryLevel} %`
            : `0 %`}
        </Text>
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
    paddingTop: 24,
    backgroundColor: 'white',
  },

  text: {
    color: 'black',
    fontSize: 20,
  },
});
