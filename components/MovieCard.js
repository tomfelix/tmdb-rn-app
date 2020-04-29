import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const MovieCard = (props) => {
  return (
    <View>
      <Card
        title="title"
        image={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}>
        <Text style={{ marginBottom: 10 }}>Popularity: 10</Text>
        <Text style={{ marginBottom: 10 }}>Rating: 10</Text>
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
