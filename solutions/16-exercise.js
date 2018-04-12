import React, { Component } from 'react';
import { View, Image, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class User extends Component {
  render() {
    const { onDelete } = this.props;
    const { name, username, email, phone, id } = this.props.data;

    return (
      <View style={userStyles.container}>
        <View style={userStyles.header}>
          <Text style={userStyles.headerText} numberOfLines={1}>
            <Text style={userStyles.username}>{username}</Text>{' '}
            <Text style={userStyles.email}>{email}</Text>
          </Text>
          <Button title={'x'} onPress={() => onDelete(id)} />
        </View>
        <Text>{name}</Text>
        <Text>Phone: {phone}</Text>
      </View>
    );
  }
}

const userStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    padding: 10,
  },

  header: {
    flexDirection: 'row',
  },

  headerText: {
    flex: 1,
    alignItems: 'center',
  },

  username: {
    fontSize: 24,
  },

  email: {
    fontSize: 20,
    color: '#cccccc',
    marginRight: 10,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({ users: json });
      });
  }

  onDelete(id) {
    this.setState(prev => {
      return { users: prev.users.filter(u => u.id !== id) };
    });
  }

  render() {
    const { users } = this.state;

    return (
      <FlatList
        style={styles.container}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <User data={item} onDelete={this.onDelete.bind(this)} />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
});
