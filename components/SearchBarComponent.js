import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Alert } from 'react-native';

const SearchBarComponent = () => {
  const [query, setQuery] = useState('');
  console.log('====================================');
  console.log(query);
  console.log('====================================');
  return (
    <View>
      <SearchBar
        onSubmitEditing={() => Alert.alert('submitted')}
        placeholder="Type Here..."
        onChangeText={setQuery}
        value={query}
      />
    </View>
  );
};

export default SearchBarComponent;
