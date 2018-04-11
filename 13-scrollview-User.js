import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class User extends Component {
  render() {
    const { username, email, name, website } = this.props.data;

    return (
      <View style={styles.container}>
        <Text style={styles.name} numberOfLines={1}>
          {username} <Text style={styles.email}>{email}</Text>
        </Text>
        <Text style={styles.detail}>{name}</Text>
        <Text style={styles.detail}>
          {'Website: '}
          {website}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  name: {
    fontSize: 18,
  },

  email: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#999999',
  },

  detail: {
    fontSize: 14,
  },
});
