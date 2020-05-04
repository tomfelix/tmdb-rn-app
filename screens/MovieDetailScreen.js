import React from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';

const MovieDetailScreen = (props) => {
  return (
    <View>
      <Text>title</Text>
      <Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }} />
      <Text>popularity</Text>
      <Text>rating</Text>
      <Text>gatunek</Text>
      <Text>desc</Text>
      <Text>country of production</Text>
    </View>
  );
};

export default MovieDetailScreen;
