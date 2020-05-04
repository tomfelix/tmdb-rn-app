import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';

const SearchBarComponent = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View>
      <SearchBar
        onSubmitEditing={() => props.handleSubmit(searchQuery)}
        placeholder="Type Here..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBarComponent;
