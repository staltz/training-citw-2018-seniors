import { StackNavigator } from 'react-navigation';
import ListScreen from './ListScreen';
import DetailsScreen from './DetailsScreen';

export default StackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'List',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3b5bdb',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
