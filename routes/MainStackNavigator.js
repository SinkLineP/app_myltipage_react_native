// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';

// stacks
import AboutStack from '../screens/about';
import HomeStack from "../screens/home";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);