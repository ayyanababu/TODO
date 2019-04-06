import { createStackNavigator } from 'react-navigation';
import Home from '../Home/HomeContainer';
import Details from '../Details/DetailsContainer';

const AppRoute = createStackNavigator(
    {
        home: { screen: Home},
        details: { screen: Details }
    },
    {
        initialRouteName: 'home',
        headerMode: 'none'
    }
);

export default AppRoute;
