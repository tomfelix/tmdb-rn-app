import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const MovieCard = (props) => {
  return (
    <View>
      <Card
        title={props.title}
        image={{
          uri: `https://api.themoviedb.org/${props.cover}`
        }}>
        <Text style={{ marginBottom: 10 }}>Popularity: {props.popularity}</Text>
        <Text style={{ marginBottom: 10 }}>Votes: {props.votes}</Text>
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
