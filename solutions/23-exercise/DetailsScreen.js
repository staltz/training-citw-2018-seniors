import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Detail extends Component {
  render() {
    const { label, value } = this.props;
    return (
      <Text style={{ fontSize: 18, color: '#232323' }}>
        <Text style={{ fontWeight: 'bold' }}>{label}: </Text>
        {value}
      </Text>
    );
  }
}

class SectionHeader extends Component {
  render() {
    const { label } = this.props;
    return (
      <View style={styles.sectionHeader}>
        <Text style={{ fontSize: 20, color: '#777777' }}>{label}</Text>
      </View>
    );
  }
}

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const defaults = { title: 'User' };
    if (!params || !params.user || !params.user.name) return defaults;
    return {
      title: params.user.name,
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const { user } = params;

    return (
      <View style={styles.container}>
        <Detail label={'Email'} value={user.email} />
        <Detail label={'Username'} value={user.username} />
        <Detail label={'Phone'} value={user.phone} />
        <SectionHeader label={'Address'} />
        <Detail label={'Street'} value={user.address.street} />
        <Detail label={'Suite'} value={user.address.suite} />
        <Detail label={'City'} value={user.address.city} />
        <Detail label={'Zipcode'} value={user.address.zipcode} />
        <SectionHeader label={'Company'} />
        <Detail label={'Name'} value={user.company.name} />
        <Detail label={'Business'} value={user.company.catchPhrase} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'white',
  },

  sectionHeader: {
    marginTop: 20,
    marginBottom: 5,
    alignSelf: 'stretch',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
});
