import React from 'react';
import { FlatList, Text } from 'react-native';
import NewsListItem from './NewsListItem'
import NewsListSeparator from './NewsListSeparator'
import news from '../data/news'


const noop = () => null; //no operation blank function for TouchableHighlight

const extractNewsItemKey = (item) => {  //need a unique key to pass to FlatList, in news.json id is unique for each news so use that
  return item.url;
};

//need a basic stateless component:
const NewsList = ({news, onNewsSelected}) => {

  const renderNewsItem = ({item}) => { //item is the object from news json list
    const onSelected = () => {
      onNewsSelected(item);
    };
    return (
      <NewsListItem item={item} onNewsSelected={onSelected} />
    );
  };

  return (
    <FlatList
      data={news}
      renderItem={renderNewsItem}
      keyExtractor={extractNewsItemKey}
      ItemSeparatorComponent={NewsListSeparator}
    />
  )
};

export default NewsList;
