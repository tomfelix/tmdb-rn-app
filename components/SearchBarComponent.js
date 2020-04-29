import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';

const SearchBarComponent = () => {
  const [query, setQuery] = useState('');

  return (
    <View>
      <SearchBar placeholder="Type Here..." onChangeText={setQuery} value={query} />
    </View>
  );
};

export default SearchBarComponent;
