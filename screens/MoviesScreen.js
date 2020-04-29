import React from 'react';
import { View, Text } from 'react-native';
import SearchBarComponent from '../components/SearchBarComponent';

const MoviesScreen = () => {
  return (
    <View>
      <SearchBarComponent />
      <Text>Movies Screen</Text>
    </View>
  );
};

export default MoviesScreen;
