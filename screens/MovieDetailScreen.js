import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import Axios from 'axios';

const API_KEY = '22d3bf9dd261998ae9158dcedfb8b4b9';

const MovieDetailScreen = (props) => {
  const [data, setData] = useState([]);

  const movieId = props.navigation.getParam('movieId');

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        `https://api.themoviedb.org/3/movie/${movieId}?
        &api_key=${API_KEY}
        `
      );

      setData(result);
    };

    fetchData();
  }, [movieId]);

  console.log('movieId', movieId, data?.data?.title);
  if (data.length == 0) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>{data.data.title}</Text>
      <Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }} />
      <Text>gatunek</Text>
      {data.data.genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
      <Text>{data.data.overview}</Text>
      <Text>country of production</Text>
      {data.data.production_countries.map((country) => (
        <Text key={country.id}>{country.name}</Text>
      ))}
    </View>
  );
};

export default MovieDetailScreen;
