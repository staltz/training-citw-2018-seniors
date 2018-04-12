import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

class User extends Component {
  render() {
    const { onSelect } = this.props;
    const { name } = this.props.data;

    return (
      <TouchableOpacity onPress={this.props.onSelect}>
        <View style={userStyles.container}>
          <View style={userStyles.header}>
            <Text style={userStyles.name} numberOfLines={1}>
              {name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const userStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    padding: 10,
  },

  name: {
    flex: 1,
    alignItems: 'center',
    fontSize: 24,
    color: 'black',
  },
});

export default class ListScreen extends Component {
  static navigationOptions = {
    title: 'List',
  };

  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.setState({ users });
  }

  onSelect = user => {
    this.props.navigation.navigate('Details', { user: user });
  };

  render() {
    const { users } = this.state;

    return (
      <FlatList
        style={styles.container}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <User data={item} onSelect={() => this.onSelect(item)} />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});
