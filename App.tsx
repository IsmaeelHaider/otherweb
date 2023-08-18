import React, { type PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,

} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ItemsScreen from './src/screens/items';
import BucketScreen from './src/screens/bucket';
import { NativeBaseProvider } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();


const App = () => {

  const backgroundStyle = {
    flex: 1
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle='dark-content'
        />
        <NavigationContainer>
          <Tab.Navigator labeled={false} activeColor="#f0edf6" inactiveColor="#3e2465">
            <Tab.Screen name="Items" component={ItemsScreen} options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} />
              ),
            }} />
            <Tab.Screen name="Bucket" component={BucketScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
