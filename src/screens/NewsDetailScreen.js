import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class NewsDetailScreen extends Component {
  static navigationOptions = (
    {navigation}) => {
    const name =
      navigation.state.params.name;
    return {
      title: name
    };
  };

  render() {
    const article = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <NewsDetail article={article} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
