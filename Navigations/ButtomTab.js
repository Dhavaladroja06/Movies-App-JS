import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesScreen from '../Screen/MoviesScreen';
import LikeScreen from '../Screen/LikeScreen';

const Tab = createBottomTabNavigator();

const ButtomTabNavigations = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="Likes" component={LikeScreen} />
      </Tab.Navigator>
  );
};

export default ButtomTabNavigations;