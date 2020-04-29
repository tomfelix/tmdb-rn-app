import React from 'react';
import { View, FlatList } from 'react-native';

import SearchBarComponent from '../components/SearchBarComponent';
import MovieCard from '../components/MovieCard';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

const MoviesScreen = (props) => {
  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={{ flex: 1 }}>
      <SearchBarComponent />
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={() => (
          <MovieCard
            handleButtonClick={() => {
              props.navigation.navigate('MovieDetail');
            }}
          />
        )}
      />
    </View>
  );
};

export default MoviesScreen;
