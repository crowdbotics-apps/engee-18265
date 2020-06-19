import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile68750Navigator from '../features/UserProfile68750/navigator';
import Tutorial68749Navigator from '../features/Tutorial68749/navigator';
import NotificationList68721Navigator from '../features/NotificationList68721/navigator';
import Settings68720Navigator from '../features/Settings68720/navigator';
import Settings68712Navigator from '../features/Settings68712/navigator';
import UserProfile68710Navigator from '../features/UserProfile68710/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile68750: { screen: UserProfile68750Navigator },
Tutorial68749: { screen: Tutorial68749Navigator },
NotificationList68721: { screen: NotificationList68721Navigator },
Settings68720: { screen: Settings68720Navigator },
Settings68712: { screen: Settings68712Navigator },
UserProfile68710: { screen: UserProfile68710Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
