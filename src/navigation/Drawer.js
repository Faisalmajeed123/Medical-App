import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Bottom from './Bottom';
import Signup from '../screens/Signup';
import Calendar from '../screens/dummyScreens/Calendar';
import Home from '../screens/Home';

const Drawer = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='Bottom' component={Bottom} />
      <Drawer.Screen name='Signup' component={Signup} />
      <Drawer.Screen name='Calendar' component={Calendar} />
    </Drawer.Navigator>

  )
}

export default Drawer

const styles = StyleSheet.create({})