import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MoviesScreen from "../Screen/MoviesScreen";
import LikeScreen from "../Screen/LikeScreen";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const ButtomTabNavigations = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="video-camera" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomTabNavigations;
