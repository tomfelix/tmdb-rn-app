import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const MovieCard = () => {
  return (
    <View>
      <Card
        title="HELLO WORLD"
        image="https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg">
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title="VIEW NOW"
        />
      </Card>
    </View>
  );
};

export default MovieCard;
