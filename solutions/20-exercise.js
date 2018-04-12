import React, { Component } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs';

class Domain extends Component {
  render() {
    return (
      <View style={styles.domainContainer}>
        <Text style={styles.domainContent}>{this.props.data}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { domains: [] };
  }

  async componentDidMount() {
    const filePath = RNFS.DocumentDirectoryPath + '/g.txt';
    const exists = await RNFS.exists(filePath);
    if (!exists) {
      await RNFS.downloadFile({
        fromUrl: 'https://staltz.com/g.txt',
        toFile: filePath,
      }).promise;
    }
    const contents = await RNFS.readFile(filePath);
    const lines = contents.split('\n');
    const domains = lines.map(line => line.split(' ')[1]);
    this.setState(() => ({ domains }));
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.domains}
        renderItem={({ item }) => <Domain data={item} />}
        keyExtractor={item => item}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },

  domainContainer: {
    padding: 5,
  },

  domainContent: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
