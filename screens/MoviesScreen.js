import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

import SearchBarComponent from '../components/SearchBarComponent';
import MovieCard from '../components/MovieCard';

const API_KEY = '22d3bf9dd261998ae9158dcedfb8b4b9';

const MoviesScreen = (props) => {
  const [query, setQuery] = useState('batman');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
      );
      setData(result.data.results);
    };
    fetchData();
  }, [query]);

  if (data.length === 0) {
    return (
      <View>
        <SearchBarComponent handleSubmit={(searchQuery) => setQuery(searchQuery)} />
        <View style={styles.emptyScreen}>
          <Text>There is no movie for your search...</Text>
        </View>
      </View>
    );
  }

  return (
    <View>
      <SearchBarComponent handleSubmit={(searchQuery) => setQuery(searchQuery)} />
      <FlatList
        data={data}
        renderItem={(itemData) => {
          const { poster_path, title, vote_count, popularity, id } = itemData.item;
          return (
            <MovieCard
              key={id}
              cover={poster_path}
              title={title}
              votes={vote_count}
              popularity={popularity}
              handleButtonClick={() => {
                props.navigation.navigate('MovieDetail', { movieId: id, movieTitle: title });
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyScreen: {
    marginVertical: '50%',
    alignItems: 'center'
  }
});
export default MoviesScreen;
