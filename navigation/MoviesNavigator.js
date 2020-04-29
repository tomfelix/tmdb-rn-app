import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MovieDetailScreen from '../screens/MovieDetailScreen';
import MoviesScreen from '../screens/MoviesScreen';

const MoviesNavigator = createStackNavigator(
  {
    Movies: MoviesScreen,
    MovieDetail: MovieDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerShown: true
    }
  }
);

export default createAppContainer(MoviesNavigator);
