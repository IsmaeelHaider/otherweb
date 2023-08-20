import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import BucketScreen from './BucketScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackController from './StackController';
import {useSelector} from 'react-redux';

const Tab = createMaterialBottomTabNavigator();

const TabBarController = () => {
  const bucketData = useSelector(state => state.bucket.value);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="StackController" activeColor="#5f9ea0">
          <Tab.Screen
            name="StackController"
            component={StackController}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#009387',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Bucket"
            component={BucketScreen}
            options={{
              tabBarLabel: 'Bucket',
              tabBarColor: '#5f9ea0',
              tabBarBadge: bucketData.length ? bucketData.length : false,
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="cart" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default TabBarController;
