import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import User from './User';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          renderItem={({ item }) => <User data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
});
