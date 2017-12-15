import React from 'react';
import { View, StyleSheet } from 'react-native'
const NewsListSeparator = () => {
  return (
    <View style={styles.container} />
  );
};

export default NewsListSeparator;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2'
  }
})
