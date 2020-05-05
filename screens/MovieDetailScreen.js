import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Image, Badge } from 'react-native-elements';
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

  if (data.length === 0) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const { poster_path, title, genres, overview, production_countries } = data.data;
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <View style={styles.details}>
        {genres.map((genre) => (
          <Badge size="large" status="success" value={genre.name} key={genre.id} />
        ))}
      </View>
      <View style={styles.overview}>
        <Text>{overview}</Text>
        <View style={styles.countries}>
          {production_countries.map((country, index) => (
            <Text key={country.id}>
              {country.name}
              {index !== production_countries.length - 1 ? ', ' : ''}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

MovieDetailScreen.navigationOptions = (navigationData) => {
  const movieTitle = navigationData.navigation.getParam('movieTitle');
  return {
    title: movieTitle.length > 20 ? `${movieTitle.slice(0, 20)}...` : movieTitle,
    headerTitleAlign: 'center'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginHorizontal: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around'
  },
  overview: {
    marginHorizontal: 10
  },
  countries: {
    flexDirection: 'row',
    marginVertical: 10
  }
});

export default MovieDetailScreen;
