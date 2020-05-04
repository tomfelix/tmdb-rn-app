import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert, Text } from 'react-native';

import axios from 'axios';
import SearchBarComponent from '../components/SearchBarComponent';
import MovieCard from '../components/MovieCard';

const API_KEY = '22d3bf9dd261998ae9158dcedfb8b4b9';

const MoviesScreen = (props) => {
  const keyExtractor = (item, index) => index.toString();
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

  console.log('x', query, data);

  return (
    <View style={{ flex: 1 }}>
      <SearchBarComponent handleSubmit={(searchQuery) => setQuery(searchQuery)} />
      <FlatList
        data={data}
        renderItem={(itemData) => (
          <MovieCard
            cover={itemData.item.poster_path}
            title={itemData.item.title}
            votes={itemData.item.vote_count}
            popularity={itemData.item.popularity}
            handleButtonClick={() => {
              props.navigation.navigate('MovieDetail', { movieId: itemData.item.id });
            }}
          />
        )}
      />
      <Text>{query}</Text>
    </View>
  );
};

export default MoviesScreen;
