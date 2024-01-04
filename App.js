import React from "react";
import ButtomTabNavigations from "./Navigations/ButtomTab";
import { LikeProvider } from "./Context/LikeContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <LikeProvider>
          <ButtomTabNavigations />
        </LikeProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
