import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const MovieCard = (props) => {
  const { title, cover, popularity, votes } = props;
  return (
    <View>
      <Card
        title={title}
        image={{ uri: `https://image.tmdb.org/t/p/w500/${cover}` }}
        imageStyle={{
          width: '100%',
          height: 200
        }}>
        <Text style={{ marginBottom: 10 }}>Popularity: {popularity}</Text>
        <Text style={{ marginBottom: 10 }}>Votes: {votes}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title="VIEW NOW"
          onPress={() => {
            props.handleButtonClick();
          }}
        />
      </Card>
    </View>
  );
};

export default MovieCard;
