import { LogBox, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import bottom from './src/navigation/Bottom';
import Drawer from './src/navigation/Drawer';
import axios from 'axios';
import Search from './src/screens/Search';
import { StripeProvider } from '@stripe/stripe-react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Signup">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
