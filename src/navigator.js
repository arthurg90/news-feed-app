import { Constants } from 'expo';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NewsListScreen from './screens/NewsListScreen'
import NewsDetailScreen from './screens/NewsDetailScreen'

const isAndroid = (Platform.OS === 'android');

const extraStyles = Platform.select({
  android: {
    marginTop: Constants.statusBarHeight
  },
});

StatusBar.setBarStyle('light-content');

export default StackNavigator({
  List: {screen: NewsListScreen},
  Detail: {screen: NewsDetailScreen}
}, {
  cardStyle: {
    backgroundColor: '#fff'
  },
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#d35400',
      ...extraStyles
    }
  }
});
