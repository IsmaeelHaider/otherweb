import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemsScreen from './ItemsScreen';
import ItemDetailsScreen from './ItemDetailsScreen';

const Stack = createStackNavigator();

const StackController = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Items" component={ItemsScreen} />
      <Stack.Screen name="Details" component={ItemDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackController;
