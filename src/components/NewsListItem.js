import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Platform } from 'react-native';

const NewsListItem = ({item, onNewsSelected}) => {

  return (
    <TouchableHighlight underlayColor="#c0c0c0" onPress={onNewsSelected}>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default NewsListItem;

const styles = StyleSheet.create({
  container: {
    padding: 23,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
