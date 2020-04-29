import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoviesNavigator from './navigation/MoviesNavigator';

export default function App() {
  return <MoviesNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
