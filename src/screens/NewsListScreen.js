import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
// import NewsList from '../components/NewsList';
import news from '../data/news.json';
import NewsListSeparator from '../components/NewsListSeparator'
import NewsListItem from '../components/NewsListItem'

const extractNewsItemKey = (item) => {  //need a unique key to pass to FlatList, in news.json id is unique for each news so use that
  return item.url;
};

const renderNewsItem = ({item}) => {
  const onSelected = () => {
    onNewsSelected(item);
  };
  return (
    <NewsListItem item={item} onNewsSelected={onSelected}/>
  );
};

class NewsListScreen extends React.Component {
  static navigationOptions = {
      title: 'BBC News'    //displays a title in header bar
  };

//
  constructor(props) {
    super(props);

    this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  navigateToDetailScreen(article) {
    this.props.navigation.navigate('Detail', article);
  }
//

  render() {
      return (
            <FlatList
              data={news}
              renderItem={renderNewsItem}
              keyExtractor={extractNewsItemKey}
              ItemSeparatorComponent={NewsListSeparator}
            />
          )
    }
};

export default NewsListScreen;
