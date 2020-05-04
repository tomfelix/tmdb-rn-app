import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Image, ListItem, Badge } from 'react-native-elements';
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
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${props.cover}` }}
      />
      <Text style={styles.title}>{data.data.title.toUpperCase()}</Text>
      <View style={styles.details}>
        {data.data.genres.map((genre) => (
          <Badge size="large" status="primary" value={genre.name} style={styles} key={genre.id} />
        ))}
      </View>
      <Text>{data.data.overview}</Text>
      {data.data.production_countries.map((country) => (
        <Text key={country.id}>{country.name}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 25
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around'
  }
});

export default MovieDetailScreen;
