import 'react-native-gesture-handler';
// import SettingsScreen from './src/screens/SettingsScreen';
// import HomeScreen2 from './src/screens/HomeScreen2';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen2 from './HomeScreen2';
import SettingsScreen from './SettingsScreen';
// const Stack = createStackNavigator();


const App = createStackNavigator(
    {
      Home: HomeScreen2,
      set : SettingsScreen,
    },
  
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
     }
  );

  export default createAppContainer(App);