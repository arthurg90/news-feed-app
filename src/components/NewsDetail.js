import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import moment from 'moment';
// import FilmListSeparator from './FilmListSeparator'

const NewsDetail = ({ article }) => {
  const imageSource = {
    uri: 'https://image.tmdb.org/t/p/original/' + film.tmdbImageId + '.jpg'
  };

  return (
      <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            { film.tmdbImageId ? (
              <Image style={styles.image} source={imageSource}></Image>
            ) : null }
            <View style={styles.statsContainer}>
            { releaseYear ? (
              <Text style={styles.stats}>Released in {releaseYear}</Text>
            ) : null }
            { filmRating > 0 ? (
              <Text style={styles.stats}>Rating: {filmRating}%</Text>
            ) : null }
            </View>
            <View style={styles.showTimeContainer}>
              <Text style={styles.showTimeTitle}>Showtimes:</Text>
                {film.showtimes.map((item, idx) => {
                  return <Text key={idx} style={styles.showtime}>{item.startsAtDate} at {item.startsAtTime} on {item.channel}</Text>
                })}
            </View>
            <View style={styles.separatorLine}></View>
            <Text style={styles.synopsis}>{filmSynopsis}</Text>
          </ScrollView>
      </View>
  );
};

export default FilmDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  showtime: {
    fontSize: 14,
    paddingTop: 3,
    color: '#666'
  },
  ratingContainer: {
    marginLeft: 6
  },
  rating: {
    fontSize: 18
  },
  image: {
    aspectRatio: 0.75,
    width: '100%',
    marginBottom: 12
  },
  scrollContainer: {
    padding: 12
  },
  showtime: {
    fontSize: 12,
    paddingTop: 3,
    color: '#666'
  },
  showTimeTitle: {
    fontSize: 18,
    paddingTop: 10
  },
  synopsis: {
    paddingVertical: 6,
    fontSize: 14,
    lineHeight: 18
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#f2f2f2',
    marginVertical: 10
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  stats: {
    fontSize: 16,
  }
});
