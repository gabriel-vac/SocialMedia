import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import { Routes } from './Routes';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={Routes.Home}
    >
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;