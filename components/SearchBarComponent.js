import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Alert } from 'react-native';

const SearchBarComponent = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View>
      <SearchBar
        onSubmitEditing={() => {
          if (searchQuery.length < 1) {
            Alert.alert('Put at least one letter!');
            return;
          }
          props.handleSubmit(searchQuery);
        }}
        placeholder="Type Here..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        required
      />
    </View>
  );
};

export default SearchBarComponent;
