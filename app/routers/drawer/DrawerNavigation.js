import React, {Component} from 'react';
import {DrawerNavigator} from 'react-navigation';
import {Icon} from 'native-base';

// Import custom components
import DashboardNavigation from '../../containers/dashboard/DashboardContainer';
import CategoryNavigation from '../../containers/category/CategoryContainer';
import DrawerContent from './DrawerContent';

const drawerNavigationConfiguration = {
    headerMode: 'screen',
    contentComponent: props => <DrawerContent {...props} />
};

const DrawerNavigation = DrawerNavigator(
    {
        Dashboard: {
            screen: DashboardNavigation,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Icon name="ios-home" size={26} color={tintColor}/>
            }
        },
        Users: {
            screen: CategoryNavigation,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Icon name="ios-person" size={26} color={tintColor}/>
            }
        },
        Categories: {
            screen: DashboardNavigation,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Icon name="ios-paw" size={26} color={tintColor}/>
            }
        },
        Products: {
            screen: CategoryNavigation,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Icon name="ios-car" size={26} color={tintColor}/>
            }
        },
        Settings: {
            screen: DashboardNavigation,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Icon name="md-settings" size={26} color={tintColor}/>
            }
        },
        Maps: {
            screen: CategoryNavigation,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Icon name="ios-pin" size={26} color={tintColor}/>
            }
        },
        Notifications: {
            screen: DashboardNavigation,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Icon name="notifications" size={26} color={tintColor}/>
            }
        },
        LogOut: {
            screen: DashboardNavigation,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Icon name="ios-power" size={26} color={tintColor}/>
            }
        },
        HelpFeedback: {
            screen: DashboardNavigation,
            navigationOptions: {
                drawerLabel: 'Help & Feedback',
                drawerIcon: ({tintColor}) => <Icon name="help" size={26} color={tintColor}/>
            }
        },
    },
    drawerNavigationConfiguration
);

export default Drawer = DrawerNavigation;