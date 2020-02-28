import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import main from './pages/main';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import Result from './pages/Result';

const MainNavigator = createStackNavigator(
    {
      main: { screen: main },
      FirstPage: { screen: FirstPage},
      SecondPage: {screen: SecondPage},
      ThirdPage: {screen: ThirdPage},
      FourthPage: {screen: FourthPage},
      Result: {screen: Result},
    },
    
  );
  
const AppNavigator = createAppContainer(MainNavigator);
  
export default AppNavigator