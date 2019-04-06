import { createSwitchNavigator, createAppContainer} from 'react-navigation';
import  LoginRoute from './LoginRoute';
import AppRoute from './AppRoute';

const RootRoute = createSwitchNavigator(
    {
      authentication: { screen: LoginRoute},
      app: { screen: AppRoute }
    },
    {
        initialRouteName:  'authentication'
    }
);

export default createAppContainer(RootRoute);
