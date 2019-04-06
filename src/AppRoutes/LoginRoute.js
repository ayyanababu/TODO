import { createStackNavigator } from 'react-navigation';
import Login from '../Login/LoginContainer';

const LoginRoute = createStackNavigator(
    {
        login: { screen: Login}
    },
    {
        initialRouteName: 'login',
        headerMode: 'none',
    }
);

export default LoginRoute;

