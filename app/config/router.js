import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import FeedStack from '../screens/Feed';
import UserProfile from '../screens/UserProfile';
import UploadPhoto from '../screens/UploadPhoto';
//  import style
import * as bottomTabbar from '../styles/bottomTabbar';

export const Root = TabNavigator( {
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type='material-community' name='newspaper'
                                      color={tintColor} />,
    },
  },
  UploadPhoto: {
    screen: UploadPhoto,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type='material-community' name='plus-box-outline'
                                      size={24}color={tintColor} />,
    },
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='account-circle'
                                      color={tintColor} />,
    },
  },
},  {
  tabBarOptions: {
    activeTintColor: bottomTabbar.colors.activeTintColor,
    inactiveTintColor: bottomTabbar.colors.inactiveTintColor,
    showIcon: true,
    showLabel: false,
    style: bottomTabbar.styles.bar,
    indicatorStyle: bottomTabbar.styles.indicator,
    pressColor: bottomTabbar.colors.rippleColor,
  },
  tabBarPosition: 'bottom',
},
);
