import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import MovieDetailScreen from '../screens/MovieDetailScreen';
import MoviesScreen from '../screens/MoviesScreen';
import Colors from '../constants/Colors';

const MoviesNavigator = createStackNavigator(
  {
    Movies: MoviesScreen,
    MovieDetail: MovieDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary
    }
  }
);

export default createAppContainer(MoviesNavigator);
